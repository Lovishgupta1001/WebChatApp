
import { useContext } from 'react';
import { Box, Typography, styled } from '@mui/material';

import { AccountContext } from '../../../context/AccountProvider';

import Message from './Message';
import Footer from './Footer';

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const StyledFooter = styled(Box)`
    height: 55px;
    background: #ededed;
    // position: absolute;
    width: 100%;
    // bottom: 0
`;

const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 1px 80px;
`;

const Messages = ({ person }) => {

    const { account } = useContext(AccountContext);

    const sendText = (e) => {
        const code = e.keyCode || e.which;
        if (code == 13) {
            let message = {
                senderId: account.sub,
                receiverId: person.sub,
                // conversationId: 
            }
        }
    }


    return (

        <Wrapper>
            <Component>

            </Component>
            <Footer
                sendText={sendText}
            />
        </Wrapper>
    )
}
export default Messages;