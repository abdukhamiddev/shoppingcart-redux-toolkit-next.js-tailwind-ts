import type { Price as PriceInterface } from '../../types/Price';
import { SIGNS } from '../../constants/Currency';

interface PriceProps extends PriceInterface {
	isSublimed?: boolean;
	className?: string;
}

const Price = ({ value, currency, isSublimed, className }: PriceProps) => {
	return (
		<span className={className}>
			{isSublimed ? <sup className=''>{SIGNS[currency]}</sup> : SIGNS[currency]}
			{value.toFixed(2)}
		</span>
	);
};
export default Price;
