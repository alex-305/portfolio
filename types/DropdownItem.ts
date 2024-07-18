type DropdownSection = {
    title:string
    content:string
}

export type DropdownItem = {
    title:string
    icon?:string
    section: DropdownSection[]
}