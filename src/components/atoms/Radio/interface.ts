export interface IRadioProps {
    id: string
    name: string
    label: string
    value: string
    checked: boolean
    onChange: (value: string) => void
}