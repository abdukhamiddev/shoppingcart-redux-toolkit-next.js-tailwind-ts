import type { CreditCard as CreditCardProps } from "../../../types/CreditCard";

import VisaLogo from "../../../../assets/svg/visa.svg";
import { useMemo } from "react";
const placeholder = "●●●●  ●●●●  ●●●●  ●●●●";
const CreditCard = ({ number, name, expires }: CreditCardProps) => {
    const formattedNumber = useMemo(
        () =>
            number
                ? Array.from(placeholder)
                    .map((_, idx) => (number[idx] ? number[idx] : placeholder[idx]))
                    .join("")
                    .split("")
                : Array.from(placeholder).join("").split(""),
        [number]
    );

    return (
        <div onClick={() => console.log(formattedNumber)}>
            <VisaLogo className="" />
            <div>
                {formattedNumber.map((part, idx) => (
                    <span key={idx}>{part}</span>
                ))}
            </div>
            <div>
                <span>{name || "Unknow"}</span>
                <span>
                    {expires?.month ?? 'MM'}/
                    {expires?.year ? String(expires.year).slice(2) : "YY"}
                </span>
            </div>
        </div>
    );
};

export default CreditCard