import * as React from 'react';
import { shallow } from 'enzyme';
import { Engine } from 'json-rules-engine';

import DrugUploadForm, {
  DrugUploadFormProps,

} from '../../../../lib/containers/drug_upload_tool/DrugUploadForm';

import {
  formUiSchema,
  formSchema,
  formNavSchema,
  submissionData
} from '../../../../mocks/mock_drug_tool_data';
import { NavActionEnum } from 'lib/containers/drug_upload_tool/types';

const formTitle = 'my submission';

const createShallowComponent = (props: DrugUploadFormProps) => {
  const wrapper = shallow<DrugUploadForm>(<DrugUploadForm {...props} />, {});

  const instance = wrapper.instance();
  return { wrapper, instance };
};

const mock = {
  submitFn: jest.fn(() => 'ok'),
  saveFn: jest.fn(() => 'ok'),
  formRef: {
    current: {
      submit: jest.fn(() => ''),
      setState: jest.fn(() => '')
    }
  }
};

const props: DrugUploadFormProps = {
  schema: formSchema,

  navSchema: formNavSchema,
  uiSchema: formUiSchema,

  formData: {},
  onSubmit: mock.submitFn,
  onSave: mock.saveFn,
  formTitle: formTitle,
  isWizardMode: false
};

Engine.run = jest.fn(() => Promise.resolve('restrictions'));

describe('initialization tests', () => {
  it('intialize for new submission', async () => {
    const { instance, wrapper } = createShallowComponent(props);

    expect(wrapper).toBeDefined();
    expect(instance.state.steps.length).toBe(props.navSchema.steps.length);
    expect(instance.state.formData).toEqual({});
    expect(instance.state.currentStep.id).toBe(props.navSchema.steps[0].id);
    expect(Object.keys(props.schema.properties!).length).toBeGreaterThan(1);
    const schema = instance.getSchema(instance.state.currentStep);
    expect(Object.keys(schema.properties).length).toBe(1);
    expect(Object.keys(schema.properties)[0]).toEqual(
      Object.keys(props.schema.properties!)[0]
    );
  });

  it('intialize for existing submission', async () => {
    const _props = { ...props, ...{ formData: submissionData } };
    const { instance, wrapper } = createShallowComponent(_props);
   
    expect(wrapper).toBeDefined();
    expect(instance.state.formData['welcome']['submission_name']).toBe(
      'test123Alina3'
    );
  });
});

describe('action tests', () => {
  let { instance, wrapper } = createShallowComponent(props);
  beforeEach(() => {
    ({ instance, wrapper } = createShallowComponent(props));
    instance.formRef = mock.formRef;
  });

  it('go to next step', async () => {
    const submitSpy = jest.spyOn(instance, 'onSubmit');
    const saveState = jest.spyOn(instance, 'saveStepState');
    const getNextStepFn = jest
      .spyOn(instance, 'getNextStepId')
      .mockReturnValue(Promise.resolve('restrictions'));
    expect(wrapper).toBeDefined();
    expect(instance.state.currentStep).toEqual(instance.state.steps[0]);
    instance.triggerAction(NavActionEnum.NEXT);
    expect(submitSpy).toHaveBeenCalled;
    const oldStepId = instance.state.currentStep.id;
    await instance.performAction(NavActionEnum.NEXT, false);

    expect(getNextStepFn).toHaveBeenCalledWith(
      jasmine.objectContaining({ id: oldStepId }),
      instance.state.formData,
      undefined
    );
    const nextStep = instance.state.steps.find(
      step => step.id === 'restrictions'
    );
    expect(saveState).toBeCalledTimes(1);
    expect(instance.state.currentStep.id).toEqual(nextStep!.id);
  });

  it('go to predetermined step', async () => {
    const submitSpy = jest.spyOn(instance, 'onSubmit');
    const saveState = jest.spyOn(instance, 'saveStepState');
    const getNextStepFn = jest.spyOn(instance, 'getNextStepId');

    expect(instance.state.currentStep).toEqual(instance.state.steps[0]);
    instance.nextStep = instance.state.steps[3];

    instance.triggerAction(NavActionEnum.GO_TO_STEP);
    expect(submitSpy).toHaveBeenCalled;
    const oldStepId = instance.state.currentStep.id;
    await instance.performAction(NavActionEnum.GO_TO_STEP, false);

    expect(getNextStepFn).toHaveBeenCalledWith(
      jasmine.objectContaining({ id: oldStepId }),
      instance.state.formData,
      instance.state.steps[3].id
    );

    expect(saveState).toBeCalledTimes(1);
    expect(instance.state.currentStep.id).toEqual(instance.state.steps[3].id);
  });

  it('go to previous numerical step if not wizard', async () => {
    instance.nextStep = instance.state.steps[3];
    await instance.performAction(NavActionEnum.GO_TO_STEP, false);
    expect(instance.state.currentStep.id).toEqual(instance.state.steps[3].id);
    await instance.performAction(NavActionEnum.PREVIOUS, false);
    expect(instance.state.currentStep.id).toEqual(instance.state.steps[2].id);
  });

  it('go to previous visited step if  wizard', async () => {
    const _props = { ...props, ...{ isWizard: true } };
    let { instance } = createShallowComponent(_props);
    instance.formRef = mock.formRef;
    instance.nextStep = instance.state.steps[3];
    await instance.performAction(NavActionEnum.GO_TO_STEP, false);
    expect(instance.state.currentStep.id).toEqual(instance.state.steps[3].id);
    await instance.performAction(NavActionEnum.PREVIOUS, false);
    expect(instance.state.currentStep.id).toEqual(instance.state.steps[2].id);
  });

  it('trigger validation', async () => {
    //TODO
  });

  it('show warning when excluding a screen', async () => {
    //TODO
  });
});
