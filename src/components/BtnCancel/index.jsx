
const BtnCancel = () => {

    const handleCancel = (e) => {
        const card = e.currentTarget.closest('.cardOp');
        card.remove();
    }

    return (
        <button onClick={handleCancel} className="btn btn-cancel">Cancel</button>
    );
};

export default BtnCancel;