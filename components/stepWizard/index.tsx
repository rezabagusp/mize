import React, { ReactNode } from 'react';
import cn from 'classnames';
import Icon from '../icon';
import styles from './index.module.css';

type StepWizardData = {
  name: string,
};

interface Props {
  className?: string,
  steps: StepWizardData[],
  activeStepIndex: number,
  onChangeActiveStepIdx?: (idx: number) => void,
}

const StepWizard = ({
  className,
  steps,
  activeStepIndex = 0,
  onChangeActiveStepIdx,
}: Props) => {
  const handleChangeActiveIdx = (index: number) => {
    if (index < activeStepIndex && onChangeActiveStepIdx) {
      onChangeActiveStepIdx(index);
    }
  };

  const renderStepCircle = (step: StepWizardData, index: number): ReactNode => {
    const { name } = step;
    const isActiveStep = index === activeStepIndex;
    const isPrevStep = index < activeStepIndex;
    const baseStepCircleClass = 'rounded-full w-6 h-6 text-center text-base font-bold mx-auto';

    if (isActiveStep) {
      return (
        <>
          <div className={cn(baseStepCircleClass, 'bg-primary-pressed')}>
            <div className="text-neutral-10">
              {index + 1}
            </div>
          </div>
          <div className="text-primary-pressed text-sm font-bold text-center mt-1 line-clamp-2 px-2">
            {name}
          </div>
        </>
      );
    }

    if (isPrevStep) {
      return (
        <>
          <div
            className={cn(
              baseStepCircleClass,
              'bg-primary-pressed flex items-center justify-around',
            )}
          >
            <Icon icon="checkCircle" size={20} color="neutral10" />
          </div>
          <div className="text-primary-main text-sm font-bold text-center mt-1 line-clamp-2 px-2">
            {name}
          </div>
        </>
      );
    }

    return (
      <>
        <div className={cn(baseStepCircleClass, 'bg-neutral-30')}>
          <div className="text-neutral-60">
            {index + 1}
          </div>
        </div>
        <div className="text-neutral-60 text-sm font-bold text-center mt-1 line-clamp-2 px-2">
          {name}
        </div>
      </>
    );
  };

  const renderStep = (step: StepWizardData, index: number) => (
    <div
      className={cn(
        'mx-auto relative py-2 min-h-full',
        { 'cursor-pointer': onChangeActiveStepIdx && index < activeStepIndex },
      )}
      onClick={() => handleChangeActiveIdx(index)}
    >
      {renderStepCircle(step, index)}
      {
        (index + 1) < steps.length && (
          <div
            className={cn(
              styles['stepWizard-line'],
              activeStepIndex <= index
                ? styles['stepWizard-line--dashed']
                : 'border border-solid border-primary-pressed',
            )}
            style={{
              width: 'calc(100% - 12px)',
              left: 'calc(50% + 12px)',
            }}
          />
        )
      }
    </div>
  );

  const renderSteps = (): ReactNode => steps.map((step: StepWizardData, index: number) => (
    <div
      key={`step-wizard-${index + 1}`}
      style={{
        maxWidth: `${100 / steps.length}%`,
        width: '100%',
      }}
    >
      {renderStep(step, index)}
    </div>
  ));

  return (
    <div
      className={cn(
        styles.stepWizard,
        className,
      )}
    >
      {renderSteps()}
    </div>
  );
};

export type { StepWizardData };
export default StepWizard;
