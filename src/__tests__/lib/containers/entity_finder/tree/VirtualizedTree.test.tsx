import '@testing-library/jest-dom'
import {
  findByRole,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Map } from 'immutable'
import { cloneDeep } from 'lodash-es'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { VariableSizeNodePublicState } from 'react-vtree'
import { NodeComponentProps } from 'react-vtree/dist/es/Tree'
import {
  EntityTreeNodeType,
  getNodeData,
  getTreeWalkerFunction,
  Node,
  RootNodeConfiguration,
  TreeData,
} from '../../../../../lib/containers/entity_finder/tree/VirtualizedTree'
import { createWrapper } from '../../../../../lib/testutils/TestingLibraryUtils'
import { EntityType } from '../../../../../lib/utils/synapseTypes'

describe('VirtualizedTree tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getNodeData tests', () => {
    const nestingLevel = 5
    const getNextPageOfChildren = jest.fn()
    const setSelectedId = jest.fn()
    const treeNodeType = EntityTreeNodeType.SINGLE_PANE
    const selected = Map<string, number>()
    const selectableTypes = [EntityType.FOLDER]
    const autoExpand = jest.fn().mockReturnValue(true)
    const defaultHeight = 50
    const currentContainer = null

    it('General test for rootNodeConfiguration', () => {
      const rootNodeConfiguration: RootNodeConfiguration = {
        show: true,
        nodeText: 'Favorites',
        children: [],
        fetchNextPage: async () => {},
        hasNextPage: false,
      }
      const actual = getNodeData({
        node: rootNodeConfiguration,
        nestingLevel,
        getNextPageOfChildren,
        setSelectedId,
        treeNodeType,
        selected,
        selectableTypes,
        autoExpand,
        defaultHeight,
        currentContainer,
      })

      const expected = {
        nestingLevel,
        node: rootNodeConfiguration,
        data: {
          id: 'root',
          node: rootNodeConfiguration,
          getNextPageOfChildren,
          isLeaf: false,
          isOpenByDefault: true,
          nestingLevel,
          setSelectedId,
          treeNodeType,
          isSelected: false,
          isDisabled: false,
          defaultHeight,
        },
      }

      expect(actual).toEqual(expected)
    })

    it('General test for entity header', () => {
      const node = {
        id: 'syn123',
        type: 'org.sagebionetworks.repo.model.Folder',
        name: 'A Custom Folder Name',
        fetchNextPage: async () => {},
        hasNextPage: false,
      }
      const actual = getNodeData({
        node,
        nestingLevel,
        getNextPageOfChildren,
        setSelectedId,
        treeNodeType,
        selected,
        selectableTypes,
        autoExpand,
        defaultHeight,
        currentContainer,
      })

      const expected = {
        nestingLevel,
        node: node,
        data: {
          id: node.id,
          node,
          getNextPageOfChildren,
          isLeaf: false,
          isOpenByDefault: true,
          nestingLevel,
          setSelectedId,
          treeNodeType,
          isSelected: false,
          isDisabled: false,
          defaultHeight,
        },
      }

      expect(actual).toEqual(expected)
    })
    it('isOpenByDefault matches the value of autoExpand', () => {
      const autoExpandTrue = jest.fn().mockReturnValue(true)
      const autoExpandFalse = jest.fn().mockReturnValue(false)
      const node = {
        id: 'syn123',
        name: 'A Custom Folder Name',
        children: [],
        fetchNextPage: async () => {},
        hasNextPage: false,
      }

      let isOpenByDefault = getNodeData({
        node,
        nestingLevel,
        getNextPageOfChildren,
        setSelectedId,
        treeNodeType,
        selected,
        selectableTypes,
        autoExpand: autoExpandTrue, // !
        defaultHeight,
        currentContainer,
      }).data.isOpenByDefault

      expect(isOpenByDefault).toBe(true)

      isOpenByDefault = getNodeData({
        node,
        nestingLevel,
        getNextPageOfChildren,
        setSelectedId,
        treeNodeType,
        selected,
        selectableTypes,
        autoExpand: autoExpandFalse, // !
        defaultHeight,
        currentContainer,
      }).data.isOpenByDefault

      expect(isOpenByDefault).toBe(false)
    })

    it('automatically fetches children if autoExpanded with undefined children', () => {
      const autoExpand = jest.fn().mockReturnValue(true)
      const children = undefined
      const node = {
        id: 'syn123',
        name: 'A Custom Folder Name',
        children: children,
        fetchNextPage: async () => {},
        hasNextPage: false,
      }

      getNodeData({
        node,
        nestingLevel,
        getNextPageOfChildren,
        setSelectedId,
        treeNodeType,
        selected,
        selectableTypes,
        autoExpand,
        defaultHeight,
        currentContainer,
      })

      expect(getNextPageOfChildren).toHaveBeenCalled()
    })
    it('For Single Pane tree, selected if the ID is in the selected map', () => {
      const treeNodeType = EntityTreeNodeType.SINGLE_PANE
      const id = 'syn123'
      let selected = Map<string, number>()
      const node = {
        id: id,
        name: 'A Custom Folder Name',
        children: [],
        fetchNextPage: async () => {},
        hasNextPage: false,
      }

      let isSelected = getNodeData({
        node,
        nestingLevel,
        getNextPageOfChildren,
        setSelectedId,
        treeNodeType,
        selected,
        selectableTypes,
        autoExpand,
        defaultHeight,
        currentContainer,
      }).data.isSelected

      expect(isSelected).toBe(false)

      selected = Map<string, number>().set(id, 1)
      isSelected = getNodeData({
        node,
        nestingLevel,
        getNextPageOfChildren,
        setSelectedId,
        treeNodeType,
        selected,
        selectableTypes,
        autoExpand,
        defaultHeight,
        currentContainer,
      }).data.isSelected

      expect(isSelected).toBe(true)
    })
    it('For Dual Pane tree, selected if the ID is the current container', () => {
      const treeNodeType = EntityTreeNodeType.DUAL_PANE
      const id = 'syn123'
      let currentContainer = null
      const node = {
        id: id,
        name: 'A Custom Folder Name',
        children: [],
        fetchNextPage: async () => {},
        hasNextPage: false,
      }

      let isSelected = getNodeData({
        node,
        nestingLevel,
        getNextPageOfChildren,
        setSelectedId,
        treeNodeType,
        selected,
        selectableTypes,
        autoExpand,
        defaultHeight,
        currentContainer,
      }).data.isSelected

      expect(isSelected).toBe(false)

      currentContainer = id
      isSelected = getNodeData({
        node,
        nestingLevel,
        getNextPageOfChildren,
        setSelectedId,
        treeNodeType,
        selected,
        selectableTypes,
        autoExpand,
        defaultHeight,
        currentContainer,
      }).data.isSelected

      expect(isSelected).toBe(true)
    })
    it('isDisabled if is not a selectable type', () => {
      let selectableTypes = [EntityType.FOLDER]
      const node = {
        id: 'syn123',
        name: 'A Custom Folder Name',
        type: 'org.sagebionetworks.repo.model.Folder',
        children: [],
        fetchNextPage: async () => {},
        hasNextPage: false,
      }

      let isDisabled = getNodeData({
        node,
        nestingLevel,
        getNextPageOfChildren,
        setSelectedId,
        treeNodeType,
        selected,
        selectableTypes,
        autoExpand,
        defaultHeight,
        currentContainer,
      }).data.isDisabled

      expect(isDisabled).toBe(false)

      selectableTypes = []
      isDisabled = getNodeData({
        node,
        nestingLevel,
        getNextPageOfChildren,
        setSelectedId,
        treeNodeType,
        selected,
        selectableTypes,
        autoExpand,
        defaultHeight,
        currentContainer,
      }).data.isDisabled

      expect(isDisabled).toBe(true)
    })
    it('throws error when passed a pagination node', () => {
      expect(() =>
        getNodeData({
          node: { __paginationNode: true },
          nestingLevel,
          getNextPageOfChildren,
          setSelectedId,
          treeNodeType,
          selected,
          selectableTypes,
          autoExpand,
          defaultHeight,
          currentContainer,
        }),
      ).toThrowError()
    })
  })

  describe('treeWalker tests', () => {
    it('Yields node data in the correct order', async () => {
      const mockSetSelectedId = jest.fn()
      const mockAutoExpand = jest.fn().mockReturnValue(false)
      const mockItemSize = jest.fn().mockReturnValue(50)
      const mockFetchNextPage = jest.fn()
      const selectableTypes = [EntityType.FOLDER]
      const selected = Map<string, number>()
      const rootNodeConfiguration: RootNodeConfiguration = {
        show: true,
        nodeText: 'Projects',
        children: [
          {
            id: 'syn123',
            name: 'Folder 123',
            type: 'org.sagebionetworks.repo.model.Folder',
            children: [],
          },
          {
            id: 'syn456',
            name: 'Folder 456',
            type: 'org.sagebionetworks.repo.model.Folder',
            children: [],
          },
        ],
        fetchNextPage: mockFetchNextPage,
        hasNextPage: true,
      }
      const currentContainer = 'root'
      /**
       * Verify that we get nodes in the following order:
       * - root
       * - undefined
       * - child-1
       * - child-2
       * -
       */
      const treeWalker = getTreeWalkerFunction(
        rootNodeConfiguration,
        mockSetSelectedId,
        EntityTreeNodeType.DUAL_PANE,
        selected,
        selectableTypes,
        mockAutoExpand,
        mockItemSize,
        currentContainer,
        mockFetchNextPage,
      )

      const generator = treeWalker()

      const rootData = getNodeData({
        node: rootNodeConfiguration,
        nestingLevel: 0,
        getNextPageOfChildren: mockFetchNextPage,
        setSelectedId: mockSetSelectedId,
        treeNodeType: EntityTreeNodeType.DUAL_PANE,
        selected: selected,
        selectableTypes: selectableTypes,
        autoExpand: mockAutoExpand,
        currentContainer: currentContainer,
        defaultHeight: 50,
      })

      // Root
      expect(generator.next().value).toEqual(rootData)
      // react-vtree will pass the root node and nesting level
      expect(
        generator.next({
          nestingLevel: 0,
          node: rootNodeConfiguration,
          data: rootData,
        }).value,
      ).toBeUndefined()

      // each of the root's children will be returned
      const expectedValueChild0 = getNodeData({
        node: rootNodeConfiguration.children[0],
        nestingLevel: 1,
        getNextPageOfChildren: mockFetchNextPage,
        setSelectedId: mockSetSelectedId,
        treeNodeType: EntityTreeNodeType.DUAL_PANE,
        selected: selected,
        selectableTypes: selectableTypes,
        autoExpand: mockAutoExpand,
        currentContainer: currentContainer,
        defaultHeight: 50,
      })
      // non-root nodes have a new function constructed for getNextPageOfChildren
      expectedValueChild0.data.getNextPageOfChildren = expect.any(Function)

      const expectedValueChild1 = getNodeData({
        node: rootNodeConfiguration.children[1],
        nestingLevel: 1,
        getNextPageOfChildren: mockFetchNextPage,
        setSelectedId: mockSetSelectedId,
        treeNodeType: EntityTreeNodeType.DUAL_PANE,
        selected: selected,
        selectableTypes: selectableTypes,
        autoExpand: mockAutoExpand,
        currentContainer: currentContainer,
        defaultHeight: 50,
      })
      // non-root nodes have a new function constructed for getNextPageOfChildren
      expectedValueChild1.data.getNextPageOfChildren = expect.any(Function)

      expect(
        generator.next({
          nestingLevel: 0,
          node: rootNodeConfiguration,

          data: rootData,
        }).value,
      ).toEqual(expectedValueChild0)
      expect(
        generator.next({
          nestingLevel: 0,
          node: rootNodeConfiguration,
          data: rootData,
        }).value,
      ).toEqual(expectedValueChild1)

      // The root node has more children that have not been fetched, so a pagination node should be yielded
      expect(
        generator.next({
          nestingLevel: 0,
          node: rootNodeConfiguration,
          data: rootData,
        }).value,
      ).toEqual(
        expect.objectContaining({
          node: { __paginationNode: true },
        }),
      )

      // Verify that the next value yielded is undefined
      expect(
        generator.next({
          nestingLevel: 1,
          node: rootNodeConfiguration.children[0],
          data: expectedValueChild0,
        }).value,
      ).toEqual(undefined)

      // We could keep traversing a tree, but this should be good enough
    })
  })

  describe('Node tests', () => {
    it('Renders a fragment only when height is 0', async () => {
      const nodeProps: NodeComponentProps<
        TreeData,
        VariableSizeNodePublicState<TreeData>
      > = {
        style: { height: 0 },
        data: {
          id: 'root',
          isOpenByDefault: false,
          defaultHeight: 50,
          node: {
            show: false,
            nodeText: 'Projects',
            children: [],
            fetchNextPage: async () => {},
            hasNextPage: false,
          },
          getNextPageOfChildren: async () => {},
          isLeaf: false,
          nestingLevel: 0,
          setSelectedId: id => {},
          treeNodeType: EntityTreeNodeType.SINGLE_PANE,
          isSelected: false,
          isDisabled: false,
        },
        setOpen: async (state: boolean) => {},
        isOpen: true,
        height: 0, // this height property doesn't seem to do anything
        resize: (height: number) => {},
      }
      render(<Node {...nodeProps} />, {
        wrapper: createWrapper(),
      })

      expect(
        screen.queryByText(nodeProps.data.node.nodeText),
      ).not.toBeInTheDocument()
    })
    it('Fetches next page for a pagination node when inView', async () => {
      const mockFetchNextPage = jest.fn()
      const nodeProps: NodeComponentProps<
        TreeData,
        VariableSizeNodePublicState<TreeData>
      > = {
        style: { height: 50 },
        data: {
          id: 'root-pagination',
          isOpenByDefault: false,
          defaultHeight: 50,
          node: {
            __paginationNode: true,
          },
          getNextPageOfChildren: mockFetchNextPage,
          isLeaf: false,
          nestingLevel: 0,
          setSelectedId: id => {},
          treeNodeType: EntityTreeNodeType.SINGLE_PANE,
          isSelected: false,
          isDisabled: false,
        },
        setOpen: async (state: boolean) => {},
        isOpen: true,
        height: 50,
        resize: (height: number) => {},
      }
      render(<Node {...nodeProps} />, {
        wrapper: createWrapper(),
      })

      expect(mockFetchNextPage).not.toHaveBeenCalled()

      // Node comes into view
      mockAllIsIntersecting(true)

      await waitFor(() => expect(mockFetchNextPage).toHaveBeenCalled())
    })

    it('Fetches children on expand if children have not been fetched', async () => {
      const mockFetchNextPage = jest.fn()
      const nodeProps: NodeComponentProps<
        TreeData,
        VariableSizeNodePublicState<TreeData>
      > = {
        style: { height: 50 },
        data: {
          id: 'root-pagination',
          isOpenByDefault: false,
          defaultHeight: 50,
          node: {
            id: 'syn123',
            type: 'org.sagebionetworks.repo.model.Folder',
            name: 'My Folder',
            children: undefined,
          },
          getNextPageOfChildren: mockFetchNextPage,
          isLeaf: false,
          nestingLevel: 0,
          setSelectedId: id => {},
          treeNodeType: EntityTreeNodeType.SINGLE_PANE,
          isSelected: false,
          isDisabled: false,
        },
        setOpen: async (state: boolean) => {},
        isOpen: false,
        height: 50,
        resize: (height: number) => {},
      }
      render(<Node {...nodeProps} />, {
        wrapper: createWrapper(),
      })

      expect(mockFetchNextPage).not.toHaveBeenCalled()

      userEvent.click(screen.getByRole('button'))

      await waitFor(() => expect(mockFetchNextPage).toHaveBeenCalled())
    })
    it('Displays the entity name for an EntityHeader', async () => {
      const mockFetchNextPage = jest.fn()
      const nodeProps: NodeComponentProps<
        TreeData,
        VariableSizeNodePublicState<TreeData>
      > = {
        style: { height: 50 },
        data: {
          id: 'root-pagination',
          isOpenByDefault: false,
          defaultHeight: 50,
          node: {
            id: 'syn123',
            type: 'org.sagebionetworks.repo.model.Folder',
            name: 'My Folder',
            children: undefined,
          },
          getNextPageOfChildren: mockFetchNextPage,
          isLeaf: false,
          nestingLevel: 0,
          setSelectedId: id => {},
          treeNodeType: EntityTreeNodeType.SINGLE_PANE,
          isSelected: false,
          isDisabled: false,
        },
        setOpen: async (state: boolean) => {},
        isOpen: false,
        height: 50,
        resize: (height: number) => {},
      }
      render(<Node {...nodeProps} />, {
        wrapper: createWrapper(),
      })
      await screen.findByText(nodeProps.data.node.name)
    })
    it('Displays the node text for the root node', async () => {
      const mockFetchNextPage = jest.fn()
      const nodeProps: NodeComponentProps<
        TreeData,
        VariableSizeNodePublicState<TreeData>
      > = {
        style: { height: 50 },
        data: {
          id: 'root-pagination',
          isOpenByDefault: false,
          defaultHeight: 50,
          node: {
            show: true,
            nodeText: 'My Favorites',
            children: [],
            fetchNextPage: async () => {},
            hasNextPage: false,
          },
          getNextPageOfChildren: mockFetchNextPage,
          isLeaf: false,
          nestingLevel: 0,
          setSelectedId: id => {},
          treeNodeType: EntityTreeNodeType.SINGLE_PANE,
          isSelected: false,
          isDisabled: false,
        },
        setOpen: async (state: boolean) => {},
        isOpen: false,
        height: 50,
        resize: (height: number) => {},
      }
      render(<Node {...nodeProps} />, {
        wrapper: createWrapper(),
      })
      await screen.findByText(nodeProps.data.node.nodeText)
    })

    it('Expands the node when selected in Dual Pane mode', async () => {
      const mockFetchNextPage = jest.fn()
      const mockSetOpen = jest.fn()
      const nodeProps: NodeComponentProps<
        TreeData,
        VariableSizeNodePublicState<TreeData>
      > = {
        style: { height: 50 },
        data: {
          id: 'root-pagination',
          isOpenByDefault: false,
          defaultHeight: 50,
          node: {
            show: true,
            nodeText: 'My Favorites',
            children: [],
            fetchNextPage: async () => {},
            hasNextPage: false,
          },
          getNextPageOfChildren: mockFetchNextPage,
          isLeaf: false,
          nestingLevel: 0,
          setSelectedId: id => {},
          treeNodeType: EntityTreeNodeType.DUAL_PANE,
          isSelected: false,
          isDisabled: false,
        },
        setOpen: mockSetOpen,
        isOpen: false,
        height: 50,
        resize: (height: number) => {},
      }
      const { rerender } = render(<Node {...nodeProps} />, {
        wrapper: createWrapper(),
      })

      // Should start in unexpanded state
      await screen.findByText('▸')

      // `isSelected` changes. This could happen via props, see SWC-6205
      const newProps = cloneDeep(nodeProps)
      newProps.data.isSelected = true
      rerender(<Node {...newProps} />)

      // Should have called to be expanded
      await waitFor(() => expect(mockSetOpen).toBeCalledWith(true))
    })

    test('Shows a tooltip for an EntityHeader node', async () => {
      jest.useFakeTimers()
      const mockFetchNextPage = jest.fn()
      const nodeProps: NodeComponentProps<
        TreeData,
        VariableSizeNodePublicState<TreeData>
      > = {
        style: { height: 50 },
        data: {
          id: 'root-pagination',
          isOpenByDefault: false,
          defaultHeight: 50,
          node: {
            id: 'syn123',
            type: 'org.sagebionetworks.repo.model.Folder',
            name: 'My Folder',
            children: undefined,
          },
          getNextPageOfChildren: mockFetchNextPage,
          isLeaf: false,
          nestingLevel: 0,
          setSelectedId: id => {},
          treeNodeType: EntityTreeNodeType.SINGLE_PANE,
          isSelected: false,
          isDisabled: false,
        },
        setOpen: async (state: boolean) => {},
        isOpen: false,
        height: 50,
        resize: (height: number) => {},
      }
      render(<Node {...nodeProps} />, {
        wrapper: createWrapper(),
      })
      const nameInTree = await screen.findByText('My Folder')
      userEvent.hover(nameInTree)
      jest.runAllTimers()
      const tooltip = await screen.findByRole('tooltip')

      within(tooltip).getByText('My Folder', { exact: false })
      within(tooltip).getByText('ID:', { exact: false })
      within(tooltip).getByText('syn123', { exact: false })
    })
  })
})
