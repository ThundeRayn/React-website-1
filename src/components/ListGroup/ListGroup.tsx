
import { useState } from "react";
//import styles from './ListGroup.module.css';
import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding:0;
`;

interface ListItemProps{
  active: boolean;
};

const ListItem = styled.li<ListItemProps>`
    padding: 5px 0;
    background: ${(props) => props.active? 'blue' : 'none'};
`;

interface PropGroupList{
  items: string[],
  heading:string,
  onSelectItem: (item: string) => void;
}

function ListGroup({items,heading,onSelectItem}: PropGroupList) {

  const [SelectedIndex, Set_SelectIndex] = useState(0);

  const empty_message = items.length === 0 && <p>No item found!!</p>

  return (
    <>
      <h1>{heading}</h1>
      {empty_message}
      <List 
      /*className={[styles.listGroup,styles.container].join(' ')}*/
      >
        {items.map((item,index) => (
          <ListItem 
          active = {index === SelectedIndex}
          key={item}
          onClick={() => {
             Set_SelectIndex(index);
             onSelectItem(item);
          }}
          >

          {item}
          </ListItem>) )}
      </List>
    </>
  );
}

export default ListGroup;
