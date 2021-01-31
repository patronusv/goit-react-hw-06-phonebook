import styled from 'styled-components';
const ContactListWrapper = styled.div`
  padding: 10px 0;
  li:not(:last-child) {
    margin-bottom: 10px;
  }
  .my-list-item-enter {
    opacity: 0;
    transform: translateX(-100%);
  }

  .my-list-item-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 250ms;
  }
  .my-list-item-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .my-list-item-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 250ms;
  }
`;
export default ContactListWrapper;
