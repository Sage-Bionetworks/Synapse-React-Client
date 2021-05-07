import { fail } from 'assert'
import { BackendDestinationEnum } from '../../../lib/utils/functions/getEndpoint'
import {
  BatchFileRequest,
  Direction,
  EntityType,
  FileHandleAssociateType,
  PaginatedResults,
  SortBy,
} from '../../../lib/utils/synapseTypes/'
import { SynapseClient, SynapseConstants } from '../../../lib/utils/'
import { FunctionReturningPaginatedResults } from '../../../lib/utils/SynapseClient'

describe('it works at integration level testing', () => {
  it('invalid call', () => {
    return SynapseClient.doGet(
      '/repo/v1/invalid',
      undefined,
      BackendDestinationEnum.REPO_ENDPOINT,
    ).catch(error => {
      expect(error.status).toEqual(404)
      expect(error.reason).toEqual(
        'GET was not found. Please reference API documentation at https://docs.synapse.org/rest/',
      )
    })
  })

  it('version call', () => {
    return SynapseClient.getVersion()
      .then(data => {
        expect(data.version).toBeDefined()
      })
      .catch(err => {
        fail(err.reason)
      })
  })

  it('get entity with version', async () => {
    return SynapseClient.getEntity('syn20692910', '53')
      .then(data => {
        expect(data).toBeDefined()
        expect(data['versionNumber']).toBe(53)
      })
      .catch(err => {
        fail(err.reason)
      })
  })

  it('get user profiles', () => {
    return SynapseClient.getUserProfiles(['345424', '273978', '273991'])
      .then(data => {
        expect(data.list).toBeDefined()
        expect(data.list.length).toEqual(3)
      })
      .catch(err => {
        fail(err.reason)
      })
  })

  it('list entity children', () => {
    const request = {
      includeTypes: [
        EntityType.PROJECT,
        EntityType.FOLDER,
        EntityType.FILE,
        EntityType.LINK,
      ],
      parentId: 'syn300013',
      sortBy: SortBy.NAME,
      sortDirection: Direction.ASC,
    }
    return SynapseClient.getEntityChildren(request)
      .then(data => {
        expect(data.page).toBeDefined()
      })
      .catch(err => {
        fail(err.reason)
      })
  })

  it('get files', () => {
    const request: BatchFileRequest = {
      includeFileHandles: true, // set to true to get file metadata
      includePreSignedURLs: true, // set to true to get presigned url to s3 resource (authorization required, include a session token in this case!)
      includePreviewPreSignedURLs: false,
      requestedFiles: [
        {
          fileHandleId: '1234',
          associateObjectId: '1725696',
          associateObjectType: FileHandleAssociateType.FileEntity,
        },
        {
          fileHandleId: '5678',
          associateObjectId: '1725697',
          associateObjectType: FileHandleAssociateType.FileEntity,
        },
      ],
    }
    return SynapseClient.getFiles(request)
      .then(data => {
        expect(data.requestedFiles).toBeDefined()
      })
      .catch(err => {
        fail(err.reason)
      })
  })

  it('get entity bundle latest version', () => {
    const partsMask =
      SynapseConstants.ENTITY_BUNDLE_MASK_ENTITY |
      SynapseConstants.ENTITY_BUNDLE_MASK_RESTRICTION_INFORMATION |
      SynapseConstants.ENTITY_BUNDLE_MASK_FILE_HANDLES
    return SynapseClient.getEntityBundleForVersion(
      'syn1725696',
      undefined,
      partsMask,
    )
      .then(data => {
        expect(data.entity).toBeDefined()
        expect(data.restrictionInformation).toBeDefined()
        expect(data.fileHandles).toBeDefined()
      })
      .catch(err => {
        fail(err.reason)
      })
  })

  it('get synapse wiki', () => {
    const ownerId = 'syn2580853'
    const wikiId = '409840'
    return SynapseClient.getEntityWiki(ownerId, wikiId)
      .then(data => {
        expect(data.markdown).toBeDefined()
      })
      .catch(err => {
        fail(err.reason)
      })
  })

  it('get user favorites', () => {
    return SynapseClient.getUserFavorites()
      .then(data => {
        expect(data.results).toBeDefined()
      })
      .catch(err => {
        fail(err)
      })
  })

  it('get user teams', () => {
    return SynapseClient.getUserProfile()
      .then(data => {
        return SynapseClient.getUserTeamList(data.ownerId)
          .then(data => {
            expect(data).toBeDefined()
          })
          .catch(err => {
            fail(err)
          })
      })
      .catch(err => {
        fail(err)
      })
  })

  it('get root page url', () => {
    expect(SynapseClient.getRootURL()).toBeDefined()
  })

  it('delete entity', () => {
    return SynapseClient.deleteEntity('123')
      .then(data => {
        expect(data).toBeDefined()
      })
      .catch(err => {
        fail(err.reason)
      })
  })
})

describe('it works in unit tests', () => {
  describe('getAllOfPaginatedService', () => {
    it('works with < 50 results', async () => {
      const results = ['a']
      const mockPaginatedObject: PaginatedResults<string> = {
        results,
      }
      const mockFn: FunctionReturningPaginatedResults<string> = jest
        .fn()
        .mockResolvedValueOnce(mockPaginatedObject)
      const data = await SynapseClient.getAllOfPaginatedService(mockFn)
      expect(data).toEqual(results)
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenNthCalledWith(1, 50, 0)
    })

    it('works with exacty 50 results', async () => {
      const totalResults = Array(50).fill('a')
      const mockFirstReturn: PaginatedResults<string> = {
        results: totalResults,
      }
      const mockSecondReturn: PaginatedResults<string> = {
        results: [],
      }
      const mockFn: FunctionReturningPaginatedResults<string> = jest
        .fn()
        .mockResolvedValueOnce(mockFirstReturn)
        .mockResolvedValueOnce(mockSecondReturn)
      const data = await SynapseClient.getAllOfPaginatedService(mockFn)
      expect(data).toEqual(totalResults)
      expect(mockFn).toHaveBeenCalledTimes(2)
      expect(mockFn).toHaveBeenNthCalledWith(1, 50, 0)
      expect(mockFn).toHaveBeenNthCalledWith(2, 50, 50)
    })

    it('works with > 50 results', async () => {
      const totalResults = Array(75).fill('a')
      const firstResult = totalResults.slice(0, 50)
      const secondResult = totalResults.slice(50)
      const mockFirstReturn: PaginatedResults<string> = {
        results: firstResult,
      }
      const mockSecondReturn: PaginatedResults<string> = {
        results: secondResult,
      }
      const mockFn: FunctionReturningPaginatedResults<string> = jest
        .fn()
        .mockResolvedValueOnce(mockFirstReturn)
        .mockResolvedValueOnce(mockSecondReturn)
      const data = await SynapseClient.getAllOfPaginatedService(mockFn)
      expect(data).toEqual(totalResults)
      expect(mockFn).toHaveBeenCalledTimes(2)
      expect(mockFn).toHaveBeenNthCalledWith(1, 50, 0)
      expect(mockFn).toHaveBeenNthCalledWith(2, 50, 50)
    })
  })
})
