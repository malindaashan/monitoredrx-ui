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

export default function UserList({fetchUserData}) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [checked, setChecked] = React.useState([0]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <List>
        <Button fullWidth><ListItemText primary="User1" /></Button>
        <Divider />
            
        <ListItemIcon/>
        <ListItemText primary="User2" />
        <Divider />

        <ListItemIcon/>
        <ListItemText primary="User3" />
        <Divider />

        <ListItemIcon/>
        <ListItemText primary="User4" />
        <Divider />

        <ListItemIcon/>
        <ListItemText primary="User5" />
        <Divider />

        <ListItemIcon/>
        <ListItemText primary="User6" />
        <Divider />

        <ListItemIcon/>
        <ListItemText primary="User7" />
        <Divider />

        <ListItemIcon/>
        <ListItemText primary="User8" />
        <Divider />

        <ListItemIcon/>
        <ListItemText primary="User9" />
        <Divider />

        <ListItemIcon/>
        <ListItemText primary="User10" />
        <Divider />

        <ListItemIcon/>
        <ListItemText primary="User11" />
        <Divider />

        <ListItemIcon/>
        <ListItemText primary="User12" />
        <Divider />

        <ListItemIcon/>
        <ListItemText primary="User13" />
        <Divider />

        <ListItemIcon/>
        <ListItemText primary="User14" />
        <Divider />

        <ListItemIcon/>
        <ListItemText primary="User15" />
        <Divider />
        <ListItemIcon/>
        <ListItemText primary="User15" />
        <Divider />
      </List>
    </Box>
  );
}
