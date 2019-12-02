import * as React from 'react'
import { shallow, mount } from 'enzyme'
import * as _ from 'lodash'
import { Step } from '../../../../lib/containers/synapse_form_wrapper/types'
import SummaryTable, {
  SummaryTableProps,
} from '../../../../lib/containers/synapse_form_wrapper/SummaryTable'
import $RefParser from 'json-schema-ref-parser'

import {
  stepsWithUserData,
  mockFormSchema as formSchema,
  mockFormData as submissionData,
  mockUiSchema as formUiSchema,
} from '../../../../mocks/mock_drug_tool_data'

const stepsArray: Step[] = _.cloneDeep(stepsWithUserData)

const createShallowComponent = async (props: SummaryTableProps) => {
  const schema = await $RefParser.dereference(props.schema)
  const _props = { ...props, ...{ schema } }
  const wrapper = mount(<SummaryTable {..._props} />)
  return { wrapper }
}

describe('basic tests', () => {
  const mock = {
    callbackFn: jest.fn(() => 'ok'),
  }

  let { efficacy, basic, naming } = submissionData

  const props: SummaryTableProps = {
    isWizard: true,
    schema: formSchema,
    uiSchema: formUiSchema,
    formData: {
      efficacy,
      basic,
      naming,
    },
    callbackFn: mock.callbackFn,
    steps: stepsArray,
  }
  const titles = {
    Efficacy: 'Efficacy',
    Basic: 'Basic',
    Naming: 'Naming',
  }

  it('should only display the properties that have values', async () => {
    const modifiedSubmissionData = _.cloneDeep(props.formData)
    modifiedSubmissionData.basic = {
      reqtextfield: undefined,
    }
    const _props = {
      ...props,
      ...{ formData: modifiedSubmissionData },
    }
    const { wrapper } = await createShallowComponent(_props)
    expect(_props.steps[0].title).toBe(titles.Efficacy)
    expect(
      Object.values(_props.formData.efficacy).filter(
        value => value || value === false,
      ),
    ).not.toHaveLength(0)
    expect(wrapper.text().indexOf(titles.Efficacy)).not.toBe(-1)

    expect(_props.steps[1].title).toBe(titles.Basic)
    expect(
      Object.values(_props.formData.basic).filter(
        value => value || value === false,
      ),
    ).toHaveLength(0)
    expect(wrapper.text().indexOf('Basic')).toBe(-1)
    expect(_props.steps[2].title).toBe(titles.Naming)
    expect(
      Object.values(_props.formData.naming).filter(
        value => value || value === false,
      ),
    ).not.toHaveLength(0)
    expect(wrapper.text().indexOf('Naming')).not.toBe(-1)
    expect(Object.keys(_props.formData.basic).indexOf('reqtextfield')).not.toBe(
      -1,
    )
    expect(_props.formData.basic.reqtextfield).toBeUndefined
    expect(wrapper.text().indexOf('reqtextfield')).toBe(-1)

    expect(
      Object.keys(_props.formData.naming).indexOf('chemical_name'),
    ).not.toBe(-1)
    expect(_props.formData.naming.chemical_name).not.toBeUndefined
    expect(wrapper.text().indexOf('Chemical Name')).not.toBe(-1)

    const firstColumns = wrapper.find('td:first-child')
    let result = 0
    for (let i = 0; i < firstColumns.length; i++) {
      if (firstColumns.at(i).text() !== '') {
        result++
      }
    }
    expect(result).toBe(2)
    expect(firstColumns.length).toBeGreaterThan(2)
  })

  it('should flatten nested data', async () => {
    const { wrapper } = await createShallowComponent(props)

    expect(props.formData.efficacy.cell_line_efficacy[0].cell_line).toBe(
      'Cell Line Efficacy Value',
    )

    const cell1 = wrapper.findWhere(
      n =>
        n.html() ==
        '<td>[1] What cell line was used for the efficacy assay?</td>',
    )
    const cell2 = wrapper.findWhere(
      n => n.html() == '<td>Cell Line Efficacy Value</td>',
    )

    expect(cell1).toHaveLength(1)
    expect(cell2).toHaveLength(1)
  })

  it('should not display delete button', async () => {
    let { wrapper } = await createShallowComponent(props)
    expect(wrapper.find('button')).toHaveLength(1)
    expect(wrapper.find('button').text()).toContain('Print')
    const _props = { ...props, ...{ isWizard: false } }
    ;({ wrapper } = await createShallowComponent(_props))
    expect(wrapper.find('button')).toHaveLength(1)
    expect(wrapper.find('button').text()).toContain('Print')
  })
})
