
export interface iChildren {
    children: React.ReactNode
}

export interface iLogin {
    email: string,
    password: string
}

export interface iRegister {
    name: string,
    email: string,
    password: string,
    bio: string,
    contact: string,
    course_module: string,
}

export interface iUser {
    id: string,
    email: string,
    name: string
    password: string,
    bio: string,
    contact: string,
    course_module: string,
}

export interface iCard {
    id: string
    id_usario: string
    title: string
    status: string
    updated_at: Date | null
    created_at: Date
}

export interface iCardRequest{
    title: string
    status: string
}