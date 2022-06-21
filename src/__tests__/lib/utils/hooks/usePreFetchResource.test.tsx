import { waitFor } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import usePreFetchResource from '../../../../lib/utils/hooks/usePreFetchResource'
import { rest, server } from '../../../../mocks/msw/server'

const onRecievedRequest = jest.fn()

const PRESIGNED_URL = 'https://test-url.notarealurl/presigned.pdf'

describe('usePreFetchResource tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Returns undefined when passed URL is undefined', () => {
    const {
      result: { current: resourceURL },
    } = renderHook(() => usePreFetchResource(undefined))
    expect(resourceURL).toBe(undefined)
  })

  it('Returns a local URL when passed a presigned URL', async () => {
    server.use(
      rest.get(
        PRESIGNED_URL,

        async (req, res, ctx) => {
          onRecievedRequest()
          return res(
            ctx.status(200),
            ctx.set('Content-Type', 'image/jpeg'),
            ctx.body('abcdef'),
          )
        },
      ),
    )

    const {
      result: { current: resourceURL },
    } = renderHook(() => usePreFetchResource(PRESIGNED_URL))

    await waitFor(() => expect(onRecievedRequest).toHaveBeenCalled())
    await waitFor(() => expect(resourceURL).toBeDefined())
  })
})
