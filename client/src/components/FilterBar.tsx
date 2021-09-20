import { TextField } from '@material-ui/core';

interface FilterBarProps {
    value: string;
    setValue: (value: string) => void;
}
const FilterBar = (props: FilterBarProps) => {
    const {value, setValue} = props;

    return (
        <TextField
            variant="outlined"
            value={value}
            fullWidth
            label={`Поиск`}
            type="text"
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

export default FilterBar;