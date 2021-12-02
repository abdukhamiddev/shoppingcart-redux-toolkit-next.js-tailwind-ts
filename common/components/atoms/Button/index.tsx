import { ReactNode } from "react"

interface ButtonProps {
    type?: 'primary' | 'secondary' | 'tertiary'
    htmlType?: 'button' | 'submit'
    size?: 'md' | 'lg'
    className?: 'string'
    onClick: () => void
    children: ReactNode

}
const Button = ({ htmlType = 'button', type = 'primary', size = 'md', onClick, className, }: ButtonProps) => {


}