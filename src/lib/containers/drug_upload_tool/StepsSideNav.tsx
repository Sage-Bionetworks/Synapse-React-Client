import './StepsSideNav.scss';

import * as React from 'react';
import { Step, StepStateEnum } from './types';

import { FlipProp, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faCheckCircle,
  faCircle,
  faBan,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type StepsSideNavProps = {
  stepList: Step[];
  onStepChange: Function;
};

export default function StepsSideNav(props: StepsSideNavProps) {
  const nonChildSteps = props.stepList.filter(step => step.child !== true);

  const getIcon = (
    state: StepStateEnum,
    isExcluded: boolean | undefined,
    isStatic: boolean | undefined
  ): { iconDef: IconDefinition; flip: FlipProp | undefined } => {
    let iconDef: IconDefinition = faCircle;
    let flip: FlipProp | undefined = undefined;
    if (isStatic) {
      return {
        iconDef,
        flip
      };
    }

    if (isExcluded) {
      iconDef = faBan;
      flip = 'horizontal';
    } else if (state == StepStateEnum.COMPLETED) {
      iconDef = faCheckCircle;
    } else if (state == StepStateEnum.ERROR) {
      iconDef = faExclamationCircle;
    }
    return { iconDef, flip };
  };

  const getItemClass = (
    isInProgress: boolean,
    isStatic: boolean = false
  ): string => {
    let liClassName = 'item';
    if (isInProgress) {
      liClassName = `${liClassName} pointed `;
    }
    if (isStatic) {
      liClassName = `${liClassName} static`;
    }
    return liClassName;
  };

  const getListItem = (step: Step, isRenderChild = false): JSX.Element => {
    if (!step || (step.child && !isRenderChild)) {
      return <></>;
    }
    const icon = getIcon(step.state, step.excluded, step.static);
    const itemClass = getItemClass(step.inProgress, step.static);

    return (
      <div className={itemClass}>
        <FontAwesomeIcon icon={icon.iconDef} flip={icon.flip} />
        {!step.inProgress && (
          <a href="#" onClick={() => props.onStepChange(step)}>
            {step.title}
          </a>
        )}
        {step.inProgress && <span>{step.title}</span>}
      </div>
    );
  };

  return (
    <div
      className="container SRC-menuLayout json-forms-menu"
      style={{ flex: '1' }}
    >
      <ul>
        {nonChildSteps.map((step: Step, i: number) => {
          return (
            <li className="item-wrap" key={i + step.id}>
              {getListItem(step)}
              {step.children && step.children.length > 0 && (
                <div className="subMenu">
                  <ul>
                    {step.children &&
                      step.children.map((stepChildId: string, j: number) => {
                        const childStep = props.stepList.find(
                          step => step.id === stepChildId
                        );
                        return typeof childStep === 'undefined' ? (
                          <></>
                        ) : (
                          <li className="item-wrap" key={j + stepChildId}>
                            {getListItem(childStep, true)}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
