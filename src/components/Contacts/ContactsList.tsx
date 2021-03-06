import React, {Component} from 'react';
import {withStyles, createStyles} from '@material-ui/core/styles';
import {ArrowForward} from '@material-ui/icons';
import {Table, TableRow, TableCell, TableBody, TableHead, Theme} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {StateReducer} from '../../interfaces/state';
import {getContacts} from '../../redux/actions';
import Spinner from '../common/Spinner/Spinner';
import { ContactsListProps } from './contacts-interfaces/ContactsListStateProps';

const styles = ({palette}: Theme) => createStyles({
      container: {
        width: '100%',
        overflowX: 'auto',
      },
      headerRow: {
        textTransform: 'uppercase',
      },
      row: {
        '&:nth-of-type(odd)': {
          backgroundColor: palette.background.default,
        },
      },
      linkColumn: {
        color: palette.common.black,
      },
      tableRowHover: {
        '&:hover': {
          backgroundColor: palette.grey[200],
        },
      },
    }
);

const mapStateToProps = (state: StateReducer) => {
  return { contactsList: state.contactsList };
};

const columnsNames: string[] = ['#', 'name', 'surname', 'position', 'office', 'phone', 'skype', 'corporate email', ''];
const columnsKeys: string[] = ['firstName', 'lastName', 'position', 'office', 'phoneOne', 'skype', 'email'];

class ContactsList extends Component<ContactsListProps, {}> {

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const {classes, contactsList} = this.props;
    if (!contactsList.length) {
      return (
          <Spinner />
      )
    }

    return (
        <div className={classes.container}>
          <Table>
            <TableHead>
              <TableRow className={classes.headerRow}>
                {columnsNames.map(el => <TableCell key={el}>{el}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {contactsList.map((el, index) => {
                return (
                    <TableRow className={[classes.row, classes.tableRowHover].join(' ')} key={index}>
                      <TableCell>{index + 1}</TableCell>
                      {columnsKeys.map(key => <TableCell key={key}>{el[key]}</TableCell>)}
                      <TableCell>
                        <Link to={`/contacts/${el.id}`} className={classes.linkColumn}><ArrowForward/></Link>
                      </TableCell>
                    </TableRow>
                )
              })
              }
            </TableBody>
          </Table>
        </div>
    )
  }
}

export default connect(mapStateToProps, { getContacts })(withStyles(styles)(ContactsList));

