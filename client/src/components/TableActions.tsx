import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import * as React from 'react';
import EditUserDialogComponent from './Dialogs/EditUserDialog';
import { UserPayLoad } from '../types';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ChangePasswordDialog from './Dialogs/ChangePasswordDialog';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import PersonIcon from '@material-ui/icons/Person';
import DeleteDialog from './Dialogs/DeleteDialog';
import ShowUserInfoDialog from './Dialogs/ShowUserInfoDialog';
import AuthService from '../services/authService';

interface ITableActionsProps {
    userData: UserPayLoad;
}

const TableActions = (props: ITableActionsProps) => {
    const { userData } = props;
    const [openEditDialog, setOpenEditDialog] = React.useState(false);
    const [openPassChangeDialog, setOpenPassChangeDialog] = React.useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const [openInfoDialog, setOpenInfoDialog] = React.useState(false);
    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
    };
    const handleClickOpenEditDialog = () => {
        setOpenEditDialog(true);
    };

    const handleClickOpenPassChangeDialog = () => {
        setOpenPassChangeDialog(true);
    };

    const handleClosePassChangeDialog = () => {
        setOpenPassChangeDialog(false);
    };

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };

    const handleClickOpenDeleteDialog = () => {
        setOpenDeleteDialog(true);
    };

    const handleCloseInfoDialog = () => {
        setOpenInfoDialog(false);
    };

    const handleOpenInfoDialog = () => {
        setOpenInfoDialog(true);
    };

    const currentUserId = AuthService.getCurrentUserId();
    console.log(currentUserId, userData.id);
    return (
        <>
            <Button onClick={() => handleClickOpenEditDialog()}>
                <EditIcon />
            </Button>
            <EditUserDialogComponent open={openEditDialog} handleClose={handleCloseEditDialog} userData={userData} />
            <Button
                onClick={() => {
                    handleClickOpenPassChangeDialog();
                }}
            >
                <LockOpenIcon />
            </Button>
            <ChangePasswordDialog handleClose={handleClosePassChangeDialog} open={openPassChangeDialog} id={userData.id} />
            <Button onClick={() => handleOpenInfoDialog()}>
                <PersonIcon />
            </Button>
            <ShowUserInfoDialog open={openInfoDialog} handleClose={handleCloseInfoDialog} userData={userData} />
            {Number(currentUserId) != userData.id ? (
                <>
                    <Button onClick={() => handleClickOpenDeleteDialog()}>
                        <DeleteOutlineIcon />
                    </Button>
                    <DeleteDialog handleClose={handleCloseDeleteDialog} id={userData.id} open={openDeleteDialog} />
                </>
            ) : null}
        </>
    );
};

export default TableActions;
