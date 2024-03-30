import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CurrentStep, StepIcon } from 'src/models/current_step';

@Injectable({
  providedIn: 'root'
})
  
export class StepService {

  private currentStep: CurrentStep[] = []
  private _steps: BehaviorSubject<CurrentStep[]>;

  private _icons: StepIcon[] = [
    {
      name: 'completed',
      icon: 'bi bi-check-circle'
    },
    {
      name: 'in_progress',
      icon: 'bi bi-menu-button-wide'
    },
    {
      name: 'pending',
      icon: 'bi bi-stopwatch'
    }
  ]

  constructor() {
    this._steps = new BehaviorSubject<CurrentStep[]>([{
      id: '1',
      icon: this._icons[1], 
      step: "Paso 1", 
      title: "Tú Email", 
      state: "En Progreso", 
    },
    {
      id: '2',
      icon: this._icons[2], 
      step: "Paso 2", 
      title: "Código al Correo", 
      state: "Pendiente", 
    },
    {
      id: '3',
      icon: this._icons[2], 
      step: "Paso 3", 
      title: "Nueva Contraseña", 
      state: "Pendiente", 
    }])
  }

  get allSteps() {
    return this._steps.asObservable()
  }

  actionsOnSteps(stepId: string, newState: string) {
    let currentSteps = this._steps.getValue();
    
    const iconInfo = this._icons.find(icon => icon.name === newState);
    this.currentStep = currentSteps.map(step => {
      if (step.id === stepId) {
        return { ...step, state: this.getIconByNameAndState(newState), icon: iconInfo! };
      }
      return step;
    });
    
    if (stepId === '1') {
      this.currentStep[1] = ({...currentSteps.find(step => step.id === '2'), state: 'Pendiente', icon: this._icons[1]}) as CurrentStep
    } else if (stepId === '2') {
      this.currentStep[2] = ({...currentSteps.find(step => step.id === '3'), state: 'Pendiente', icon: this._icons[1]}) as CurrentStep
    }

    this._steps.next(this.currentStep);
    
  }

  getIconByNameAndState(state: string): string {
    if (state === 'in_progress') {
      return "En Progreso"
    } else if (state === 'pending') {
      return "Pendiente"
    }
    return "Completado"
  }

}

