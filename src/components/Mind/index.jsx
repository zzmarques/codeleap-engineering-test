import useDisabled from '../../hooks/useDeisabled';
import BtnCreate from '../BtnCreate';
import FormPost from '../formPost';
import "../../sass/components/_Mind.scss";

const Mind = () => {
    const { isDisabled, enable, disable } = useDisabled();

    return (
        <section className='mind'>
            <h1 className='title'>What’s on your mind?</h1>
            <FormPost enable={enable} disable={disable}>
                <BtnCreate isDisabled={isDisabled} disable={disable}/>
            </FormPost>
        </section>
    );
};

export default Mind;