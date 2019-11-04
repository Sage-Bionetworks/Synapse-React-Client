import { SynapseClient, SynapseConstants } from '../../../lib/utils/'
import { fail } from 'assert'
import { BatchFileRequest } from 'lib/utils/jsonResponses/BatchFileRequest'
import { FileHandleAssociateType } from 'lib/utils/jsonResponses/FileHandleAssociation'
import { ProjectHeaderEnum } from 'lib/utils/jsonResponses/ProjectHeaderList'

it('invalid call', () => {
  return SynapseClient.doGet(
    '/repo/v1/invalid',
    undefined,
    undefined,
    'https://repo-prod.prod.sagebase.org',
  ).catch(error => {
    expect(error.statusCode).toEqual(404)
    expect(error.reason).toEqual(
      'GET /repo/v1/invalid was not found. Please reference API documentation at https://docs.synapse.org/rest/',
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

it('delete entity', () => {
  return SynapseClient.deleteEntity('', '123')
    .then(data => {
      expect(data).toBeDefined()
      expect(data['status']).toBe(204)
    })
    .catch(err => {
      fail(err.reason)
    })
})

it('get entity with version', async () => {
  return SynapseClient.getEntity('', 'syn20692910', '53')
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
    includeTypes: ['project', 'folder', 'file', 'link'],
    parentId: 'syn300013',
    sortBy: 'NAME',
    sortDirection: 'ASC',
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
  return SynapseClient.getEntityWiki('', ownerId, wikiId)
    .then(data => {
      expect(data.markdown).toBeDefined()
    })
    .catch(err => {
      fail(err.reason)
    })
})

it('get user favorites', () => {
  return SynapseClient.getUserFavorites('')
    .then(data => {
      expect(data.results).toBeDefined()
    })
    .catch(err => {
      fail(err)
    })
})

it('get user teams', () => {
  return SynapseClient.getUserProfile('')
    .then(data => {
      return SynapseClient.getUserTeamList('', data.ownerId)
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
  return SynapseClient.deleteEntity('', '123')
    .then(data => {
      expect(data).toBeDefined()
    })
    .catch(err => {
      fail(err.reason)
    })
})
