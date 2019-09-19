import * as React from 'react';
import { shallow } from 'enzyme';
import formschemaJson from '../../../../mocks/formschema.json';
import DrugUploadTool, {
  DrugUploadToolProps, UploadToolSearchParams
} from '../../../../lib/containers/drug_upload_tool/DrugUploadTool';
import { DrugUploadFormProps } from '../../../../lib/containers/drug_upload_tool/DrugUploadForm';
import { mockFileEntity } from '../../../../mocks/mock_file_entity';

const SynapseClient = require('../../../../lib/utils/SynapseClient');
const targetFolderId = 'syn9988882982';
const token: string = '123444';

const parentContainerId: string = 'syn20355732';
const formSchemaEntityId = 'syn9988882982';
const formUiSchemaEntityId = 'syn9988882983';
const formNavSchemaEntityId = 'syn9988882984';
const currentFileEntityId = 'syn9988882985'
const currentFileParentEntityId = 'syn9988882986'
const searchParams: UploadToolSearchParams = {
  currentFileParentEntityId
}
const fileNamePath = 'somescreen.somefield';
const formTitle = 'my submission';
const formClass = 'someFormClass';

const createShallowComponent = async (
  props: DrugUploadToolProps,
  disableLifecycleMethods: boolean = false
) => {
  const wrapper = await shallow<DrugUploadTool>(<DrugUploadTool {...props} />, {
    disableLifecycleMethods
  });

  const instance = wrapper.instance();
  return { wrapper, instance };
};
const props: DrugUploadToolProps = {
  parentContainerId,
  token,
  formSchemaEntityId,
  formUiSchemaEntityId,
  formNavSchemaEntityId,
  searchParams,
  fileNamePath,
  formTitle,
  formClass
};

describe('basic tests', () => {
  beforeEach(() => {
    SynapseClient.getFileEntityContent = jest.fn(() =>
      Promise.resolve(JSON.stringify(formschemaJson))
    );
    SynapseClient.uploadFile = jest.fn(() =>
      Promise.resolve(mockFileEntity)
    );
    SynapseClient.updateEntity = jest.fn(() =>
      Promise.resolve({ page: [mockFileEntity, mockFileEntity] })
    );
    SynapseClient.createEntity = jest.fn(() =>
      Promise.resolve({ id: targetFolderId })
    );
    SynapseClient.getEntity = jest.fn(() => Promise.resolve(mockFileEntity));

    SynapseClient.createEntity = jest.fn(() => Promise.resolve('123444'));
  });

  it('gets file entity with data', async () => {
    const { instance } = await createShallowComponent(props);
    await instance.componentDidMount();
    const result = await instance.getFileEntityWithData(token, '123444');
    expect(SynapseClient.getEntity).toHaveBeenCalledWith(token, '123444');
    expect(SynapseClient.getFileEntityContent).toHaveBeenCalledWith(
      token,
      mockFileEntity
    );
    expect(result.fileEntity).toEqual(mockFileEntity);
    expect(result.data).toEqual(formschemaJson);
  });

  it('should make 3 calls to getFileEntityWithData if there is no datafile (no currentFileEntityId)', async () => {
    const { wrapper, instance } = await createShallowComponent(props);
    const getFileEntityWithData = jest.spyOn(instance, 'getFileEntityWithData');
    await instance.componentDidMount();
    expect(wrapper).toBeDefined();
    expect(getFileEntityWithData).toHaveBeenCalledTimes(3);
  });

  it('should make 4 calls to getFileEntityWithData if there is  datafile ', async () => {
    const _props = { ...props, ...{ searchParams: { currentFileParentEntityId, currentFileEntityId } } };
    const { wrapper, instance } = await createShallowComponent(_props);
    const getFileEntityWithData = jest.spyOn(instance, 'getFileEntityWithData');
    await instance.componentDidMount();
    expect(wrapper).toBeDefined();
    expect(getFileEntityWithData).toHaveBeenCalledTimes(4);
    expect(instance.state.formData).toEqual(formschemaJson);
  });


describe( 'pass params', () => {
  it('should pass parameters correctly', async () => {
    const _props = { ...props, ...{ searchParams: { currentFileParentEntityId, currentFileEntityId }, isWizardMode: true } }
    const { wrapper, instance } = await createShallowComponent(_props);
    await instance.componentDidMount();
    expect(wrapper).toBeDefined();
    wrapper
      .find('div')
      .first()
      .hasClass('someFormClass');
    const formProps: DrugUploadFormProps = (wrapper
      .find('DrugUploadForm')
      .props() as any) as DrugUploadFormProps;
    expect(formProps.formTitle).toBe(props.formTitle);
    expect(formProps.isWizardMode).toBeTruthy();
  });

  it('should pass parameters correctly', async () => {
    const _props = { ...props, ...{ formTitle : 'Another Title' } };
    const { wrapper, instance } = await createShallowComponent(_props);
    await instance.componentDidMount();

    expect(wrapper).toBeDefined();
    wrapper
      .find('div')
      .first()
      .hasClass('someFormClass');
    const formProps: DrugUploadFormProps = (wrapper
      .find('DrugUploadForm')
      .props() as any) as DrugUploadFormProps;
      expect(formProps.formTitle).toBe('Another Title');
      expect(formProps.formData).toEqual({ });
      expect(formProps.isWizardMode).toBeFalsy();
  });
});
});

describe('saving and submitting data file', () => {
  it('will be done once the back end service is in place', async () => {
    expect(true).toBe(true);
  });
});
