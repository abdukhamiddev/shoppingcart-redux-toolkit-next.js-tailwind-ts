/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import Image from "next/image";
import EmptyStateImage from "../../../../assets/images/empty-state.png";
import Button from "../../Button/index";

const EmptyState = () => {
    const router = useRouter();
    const handleBack = () => {
        router.push("/");
    };
    return (
        <div>
            <Image height={200} width={200} alt="Empty" src={EmptyStateImage} />
            <p>Ooops ! There's Nothing</p>
            <p>Back to the catalogue and choose something</p>
            <div>
                <Button onClick={handleBack}> Back to Catalogue</Button>
            </div>
        </div>
    );
};

export default EmptyState