import { useRouter } from "next/router";
import Image from "next/image";

import EmptyStateImage from "../../../../../assets/images/empty-state.png";
import Button from "../../../../../common/components/Button/index";

const EmptyState = () => {
	const router = useRouter();

	const handleBack = () => {
		router.push("/catalogue");
	};

	return (
		<div className="">
			<Image height={200} width={200} alt="Empty" src={EmptyStateImage} />
			<p className="">Ooops ! There is nothing</p>
			<p className="">Back to the catalogue and choose something !</p>

			<div className="">
				<Button onClick={handleBack}>Back to Catalogue</Button>
			</div>
		</div>
	);
};

export default EmptyState;
