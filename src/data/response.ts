export interface BackendResponse {
    success:     boolean;
    api_message: string;
    data:        Cita[];
}

export interface Cita {
    nombre:        string;
    fecha:         string;
    hora:          string;
    problema:      string;
    nombre_doctor: string;
    ci:            string;
    citado_desde:  string;
    correo:        string;
    telefono:      string;
}

export interface BackendResponse2 {
    success:     boolean;
    api_message: string;
    data:        Cita;
}

export interface Cita {
    nombre:        string;
    fecha:         string;
    hora:          string;
    problema:      string;
    nombre_doctor: string;
    ci:            string;
    citado_desde:  string;
    correo:        string;
    telefono:      string;
}

export interface BackendResponseTra {
    success:     boolean;
    api_message: string;
    data:        Tratamiento[];
}

export interface Tratamiento {
    type:        string;
    patient:         string;
    doctor:          string;
    nurse:      string;
    date: string;
    time:            string;
    medicamento:  string;
    observaciones:        string;
    aplicaciones_faltantes:      string;
}

export interface BackendResponse2Tra {
    success:     boolean;
    api_message: string;
    data:        Tratamiento;
}

export interface Tratamiento {
    type:        string;
    patient:         string;
    doctor:          string;
    nurse:      string;
    date: string;
    time:            string;
    medicamento:  string;
    observaciones:        string;
    aplicaciones_faltantes:      string;
}

export interface BackendDoctor {
    success:     boolean;
    api_message: string;
    data:        Doctor;
}

export interface Doctor {
    reg_med:        string;
    nombre:         string;
    direccion:      string;
    num_telefono:   string;
    anno_grad:      string;
    su_consultorio: string;
}
