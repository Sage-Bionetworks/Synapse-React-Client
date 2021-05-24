import React from 'react'

export const MOCK_ACCESS_TOKEN = 'mock-access-token'

export const SynapseContextProvider = jest.fn().mockImplementation(({children}) => {
    return <>{children}</>
})

export const useSynapseContext = jest.fn().mockImplementation(() => {
    return {
        accessToken: MOCK_ACCESS_TOKEN
    }
})