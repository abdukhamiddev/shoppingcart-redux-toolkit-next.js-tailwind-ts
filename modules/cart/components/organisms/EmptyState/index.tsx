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
		<div className="flex flex-col items-center justify-center flex-1 w-full">
			<Image height={200} width={200} alt="Empty" src={EmptyStateImage} />
			<p className="text-2xl text-gray-600">Ooops ! There is nothing</p>
			<p className="mt-1 text-lg text-gray-500">
				Back to the catalogue and choose something !
			</p>

			<div className="w-48 mt-10">
				<Button onClick={handleBack}>Back to Catalogue</Button>
			</div>
		</div>
	);
};

export default EmptyState;
