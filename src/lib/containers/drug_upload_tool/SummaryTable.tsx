import * as React from 'react';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SummaryFormat, Step } from './types';
import _ from 'lodash';

export interface SummaryTableProps {
  isWizard?: boolean;
  formData: any;
  callbackFn: Function;
  steps: Step[];
}

export function getFlatData(formData: any, steps: Step[]): SummaryFormat[] {
  //takes nested json and converts it into flattened item list
  function flatten(
    object: any,
    flattenedObject: any,
    prefix: string
  ): string[] {
    const separator = '.';
    Object.keys(object).forEach(key => {
      if (object[key] === null) {
        flattenedObject[prefix + key] = '';
      } else if (
        //if the value is a proper array
        _.isArray(object[key]) &&
        !_.isString(object[key]) &&
        object[key].length > 1
      ) {
        for (let i in object[key]) {
          if (
            _.isArray(object[key][i]) ||
            (_.isObject(object[key]) && !_.isString(object[key][i]))
          ) {
            flatten(
              object[key][i],
              flattenedObject,
              `${prefix}${key}${separator}${i}${separator}`
            );
          } else {
            flattenedObject[`${prefix}${key}${separator}${i}`] = object[key][i];
          }
        }
      } else if (_.isObject(object[key]) && !_.isDate(object[key])) {
        flatten(object[key], flattenedObject, `${prefix}${key}${separator}`);
      } else {
        flattenedObject[prefix + key] = object[key];
      }
    });
    return flattenedObject;
  }

  const flatData = flatten(_.cloneDeep(formData), [], '');
  const flatFormData = _.keys(flatData).map(key => {
    let val = flatData[key];
    if (flatData[key] === false) {
      val = 'false';
    }
    if (flatData[key] === true) {
      val = 'true';
    }
    const boundary = key.indexOf('.');
    return {
      screen: _.find(steps, { id: key.substring(0, boundary) }),
      label: key.substring(boundary + 1),
      value: val
    };
  });

  const result = flatFormData
    .filter(item => item.screen && typeof item.value !== 'undefined')
    .map(item => {
      return {
        label: item.label,
        value: item.value,
        screen: item.screen!
      };
    })
    .sort((a, b) => a.screen.order - b.screen.order);

  return result;
}

export default function SummaryTable(props: SummaryTableProps): JSX.Element {
  let flatFormData: SummaryFormat[] = [];
  flatFormData = getFlatData(_.cloneDeep(props.formData), props.steps);
  const deleteButton = (screenId: string, isShow?: boolean): JSX.Element => {
    if (!isShow) {
      return <></>;
    }
    return (
      <button className="btn" onClick={() => props.callbackFn(screenId)}>
        <FontAwesomeIcon icon={faTrash} color="red"></FontAwesomeIcon>
      </button>
    );
  };

  let prevScreenId = '';
  const table = (
    <table className="table summary-table">
      <thead>
        <tr>
          <th>Screen</th>
          <th>Question</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        {flatFormData.map((line: SummaryFormat, i: number) => {
          return (
            <tr key={i + line.screen.id + line.label}>
              <td>
                {prevScreenId !== line.screen.id &&
                  (prevScreenId = line.screen.id) && (
                    <span>
                      {line.screen.title}
                      {deleteButton(line.screen.id, props.isWizard)}
                    </span>
                  )}
              </td>
              <td>{line.label}</td>
              <td>{line.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return (
    <>
      <h4> Your Data </h4>
      <div className="panel panel-default padding-full wrap">
        <div className="summary scroll-area">{table}</div>
      </div>
    </>
  );
}
