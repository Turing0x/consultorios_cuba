export interface CurrentStep {
  id: string;
  icon: StepIcon
  step: string;
  title: string;
  state: string;
}

export interface StepIcon {
  name: string;
  icon: string;
}