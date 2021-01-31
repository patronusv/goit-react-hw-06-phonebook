import styled from 'styled-components';
const AppWrapper = styled.div`
  padding: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid navy;
  border-radius: 10px;
  width: 500px;
  margin: 0 auto;
  background-color: #efefef;
  box-shadow: 7px 5px 7px 5px rgba(140, 140, 140, 0.75);
  .page-title {
    margin-bottom: 20px;
  }
  .contacts-title {
    margin-bottom: 10px;
    position: relative;
    z-index: 1;

    overflow: hidden;
  }
  .my-title-appear {
    opacity: 0;
    transform: translateX(-100%);
  }

  .my-title-appear-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 500ms;
  }
  .my-title-exit {
    opacity: 1;
  }
  .my-title-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }
  .my-filter-enter {
    opacity: 0;
    transform: translateY(-50%);
  }

  .my-filter-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 250ms;
  }
  .my-filter-exit {
    opacity: 1;
  }
  .my-filter-exit-active {
    opacity: 0;
    transition: opacity 250ms;
  }
  .my-alert-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .my-alert-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 250ms;
  }
  .my-alert-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .my-alert-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: all 250ms;
  }
`;
export default AppWrapper;
