import * as React from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import { useEffect } from 'react';

export default function UserList({userdata,handleUserClick}) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <List>
        {userdata !== undefined ? userdata.map((user) => (
                <Button id = {user.id} onClick={() => { handleUserClick(user.id) }}  fullWidth>
                <ListItemText
                primary={user.userId}
                >
                </ListItemText>
                </Button>
        )): null}

      </List>
    </Box>
  );
}
