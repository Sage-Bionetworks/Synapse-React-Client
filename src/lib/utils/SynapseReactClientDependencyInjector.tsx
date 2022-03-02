import { SynapseClient } from '.'
import { Avatar, IAvatar } from '../containers/Avatar'
import {
  ISchemaDrivenAnnotationEditor,
  SchemaDrivenAnnotationEditor,
} from '../containers/entity/annotations/SchemaDrivenAnnotationEditor'
import {
  AnnotationsTable,
  IAnnotationsTable,
} from '../containers/entity/metadata/AnnotationsTable'
import {
  IMetadataTable,
  MetadataTable,
} from '../containers/entity/metadata/MetadataTable'
import {
  EntityChildrenDetails,
  IEntityChildrenDetails,
} from '../containers/entity_finder/details/configurations/EntityChildrenDetails'
import {
  FavoritesDetails,
  IFavoritesDetails,
} from '../containers/entity_finder/details/configurations/FavoritesDetails'
import {
  IProjectListDetails,
  ProjectListDetails,
} from '../containers/entity_finder/details/configurations/ProjectListDetails'
import {
  ISearchDetails,
  SearchDetails,
} from '../containers/entity_finder/details/configurations/SearchDetails'
import {
  EntityDetailsList,
  IEntityDetailsList,
} from '../containers/entity_finder/details/EntityDetailsList'
import {
  DetailsView,
  IDetailsView,
} from '../containers/entity_finder/details/view/DetailsView'
import { ITreeNode, TreeNode } from '../containers/entity_finder/tree/TreeNode'
import { ITreeView, TreeView } from '../containers/entity_finder/tree/TreeView'
import { IUserCard, UserCard } from '../containers/UserCard'
import UserCardMedium, { IUserCardMedium } from '../containers/UserCardMedium'
import { ISynapseClient } from './ISynapseClient'

/**
 * Interface defining all of the dependencies that are supplied via dependency injection
 */
export type SynapseReactClientDependencyInjector = {
  SynapseClient: ISynapseClient
  // Components
  EntityDetailsList: IEntityDetailsList
  TreeView: ITreeView
  AnnotationsTable: IAnnotationsTable
  MetadataTable: IMetadataTable
  SchemaDrivenAnnotationEditor: ISchemaDrivenAnnotationEditor
  EntityChildrenDetails: IEntityChildrenDetails
  FavoritesDetails: IFavoritesDetails
  ProjectListDetails: IProjectListDetails
  SearchDetails: ISearchDetails
  DetailsView: IDetailsView
  TreeNode: ITreeNode
  UserCard: IUserCard

  Avatar: IAvatar
  UserCardMedium: IUserCardMedium

  // Hooks
}

/**
 * Default dependencies that are supplied via dependency injection. Can be overridden.
 */
export const defaultInjector = {
  AnnotationsTable,
  MetadataTable,
  SchemaDrivenAnnotationEditor,
  TreeView,
  EntityDetailsList,
  EntityChildrenDetails,
  FavoritesDetails,
  ProjectListDetails,
  SearchDetails,
  DetailsView,
  TreeNode,
  UserCard,

  SynapseClient,
  Avatar,
  UserCardMedium,
}
