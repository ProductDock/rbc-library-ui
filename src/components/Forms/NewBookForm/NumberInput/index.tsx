import "./NumberInput.css";

type Props = {
    number: number,
    setNumber: Function,
}

const NumberInput = ({ number, setNumber }: Props) => {
    return (
      <input type="number" data-testid="new-book-copies" min={1} value={number} onChange={(e) => setNumber(e.target.value)} className="number-input" />
    );
};

export default NumberInput;
