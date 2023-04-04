// import { TextField } from "@mui/material";
import "./NumberInput.css";

type Props = {
    number: number,
    setNumber: Function,
}

const NumberInput = ({ number, setNumber }: Props) => {
    return (
    //   <TextField
    //     type="number"
    //     id="outlined-basic"
    //     onChange={(e) => setNumber(e.target.value)}
    //     value={number}
    //   />
      <input type="number" min={1} value={number} onChange={(e) => setNumber(e.target.value)} className="number-input" />
    );
};

export default NumberInput;
