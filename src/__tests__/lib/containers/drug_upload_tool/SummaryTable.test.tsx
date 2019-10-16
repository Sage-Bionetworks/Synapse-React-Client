import * as React from 'react';
import { shallow } from 'enzyme';
import * as _ from 'lodash';
import { Step } from '../../../../lib/containers/drug_upload_tool/types';
import SummaryTable, {
  SummaryTableProps
} from '../../../../lib/containers/drug_upload_tool/SummaryTable';

import {
  submissionData,
  stepsWithUserData,
  formUiSchema,
  formSchema,
} from '../../../../mocks/mock_drug_tool_data';

const stepsArray: Step[] = _.cloneDeep(stepsWithUserData);

const createShallowComponent = (props: SummaryTableProps) => {
  const wrapper = shallow(<SummaryTable {...props} />);
  return { wrapper };
};

describe('basic tests', () => {
  const mock = {
    callbackFn: jest.fn(() => 'ok')
  };

  let { ld50, basic, naming } = submissionData;

  const props: SummaryTableProps = {
    isWizard: true,
    schema: formSchema,
    uiSchema: formUiSchema,
    formData: {
      ld50,
      basic,
      naming
    },
    callbackFn: mock.callbackFn,
    steps: stepsArray
  };
  const titles = {
    LD50: 'LD50',
    Basic: 'Basic',
    Naming: 'Naming'
  };

  it('should only display the properties that have values', () => {
    const { wrapper } = createShallowComponent(props);
    expect(props.steps[0].title).toBe(titles.LD50);
    expect(
      Object.values(props.formData.ld50).filter(
        value => value || value === false
      )
    ).not.toHaveLength(0);
    expect(wrapper.text().indexOf(titles.LD50)).not.toBe(-1);

    expect(props.steps[1].title).toBe(titles.Basic);
    expect(
      Object.values(props.formData.basic).filter(
        value => value || value === false
      )
    ).toHaveLength(0);
    expect(wrapper.text().indexOf('Basic')).toBe(-1);
    expect(props.steps[2].title).toBe(titles.Naming);
    expect(
      Object.values(props.formData.naming).filter(
        value => value || value === false
      )
    ).not.toHaveLength(0);
    expect(wrapper.text().indexOf('Naming')).not.toBe(-1);
    expect(Object.keys(props.formData.basic).indexOf('reqtextfield')).not.toBe(
      -1
    );
    expect(props.formData.basic.reqtextfield).toBeUndefined;
    expect(wrapper.text().indexOf('reqtextfield')).toBe(-1);

    expect(
      Object.keys(props.formData.naming).indexOf('chemical_name')
    ).not.toBe(-1);
    expect(props.formData.naming.chemical_name).not.toBeUndefined;
    expect(wrapper.text().indexOf('Chemical Name')).not.toBe(-1);

    const firstColumns = wrapper.find('td:first-child');
    let result = 0;
    for (let i = 0; i < firstColumns.length; i++) {
      if (firstColumns.at(i).text() !== '') {
        result++;
      }
    }
    expect(result).toBe(2);
    expect(firstColumns.length).toBeGreaterThan(2);
  });

  it('should flatten nested data', () => {
    const { wrapper } = createShallowComponent(props);

    expect(props.formData.ld50.experiments[0].strain).toBe(
      'Cillum qui consectet'
    );

    const cell = wrapper.findWhere(
      n => n.html() == '<td>[1] ld50.properties.experiments.items.properties.strain.title</td>'
    );

    expect(cell).toHaveLength(1);
  });

  it('should not display delete button', () => {
    let { wrapper } = createShallowComponent(props);
    expect(wrapper.find('button')).toHaveLength(0)
    const _props = { ...props, ...{ isWizard: false } };
    wrapper = createShallowComponent(_props).wrapper;
    expect(wrapper.find('button')).toHaveLength(0);
  });
});
