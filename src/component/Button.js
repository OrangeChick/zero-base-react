import { Icon } from './Icon.js';

export const ButtonComponent = (props) => {
  const styles = {
    color: '#525577',
    fontSize: '12px',
    fontWeight: 'bold',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    width: '89px',
    height: '30px',
    background: '#FFFFFF',
    border: 'none',
    boxShadow: '0px 4px 4px #DBDDF0',
    borderRadius: '30px',
    padding: '9px 12px',
    marginBottom: '20px',
    cursor: 'pointer',
  };

  const disabledColor = {
    color: '#ADAEB6',
  };

  return (
    <button
      style={
        props.type === 'disabled' ? { ...styles, ...disabledColor } : styles
      }
    >
      {props.children}
      <Icon type={props.type} />
    </button>
  );
};
