import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import * as React from 'react';
import EditUserDialogComponent from './Dialogs/EditUserDialog';
import { UserPayLoad } from '../types';

interface ITableActionsProps {
    userData: UserPayLoad;
}

const TableActions = (props: ITableActionsProps) => {
    const { userData } = props;
    const [openEditDialog, setOpenEditDialog] = React.useState(false);
    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
    };
    const handleClickOpenEditDialog = () => {
        setOpenEditDialog(true);
    };
    return (
        <>
                <Button onClick={() => handleClickOpenEditDialog()}>
                    <EditIcon />
                </Button>
                <EditUserDialogComponent
                    open={openEditDialog}
                    handleClose={handleCloseEditDialog}
                    userData={userData}
                    userId={userData.id}
                />
        </>
    );
};

export default TableActions;
