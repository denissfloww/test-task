import { TextField } from '@material-ui/core';

interface IFilterBarProps {
    value: string;
    setValue: (value: string) => void;
}
const FilterBar = (props: IFilterBarProps) => {
    const { value, setValue } = props;

    return <TextField variant='outlined' value={value} fullWidth label={`Поиск`} type='text' onChange={e => setValue(e.target.value)} />;
};

export default FilterBar;
