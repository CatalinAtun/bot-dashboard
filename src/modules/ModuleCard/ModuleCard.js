import React from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { Columns, Column, Spacing, Inline, Text, Stack, Tooltip } from '@cornershop/cornponents';

import { FirstPlace, SecondPlace } from '../../components/Icons';
import * as st from './styles';

const renderScoreIcon = (score) => {
    if (score === 0) {
        return <FaPlusCircle color="gray"/>
    }
    if (score < 1) {
        return <FaMinusCircle color="red"/>
    }
    if (score > 0) {
        return <FaPlusCircle color="green"/>
    }
}

const ModuleCard = ({ avatar, username, score, firstPlace, secondPlace }) => {
    return (
        <Spacing py="small">
            <st.Container>
                <Spacing py="large" px="gutter">
                    <Stack>
                        <Inline align="center">
                            <st.Image src={avatar}/>
                        </Inline>
                        <Spacing p="small">
                        <Text align="center" weight="medium" color="black400" size="lg">{username}</Text>
                        </Spacing>
                        <Columns align="center">
                            <Column width="4/12">
                                <Tooltip tooltip="Actual score">
                                    <Inline alignY="center" space="xxsmall" align="center">
                                        {renderScoreIcon(score)}
                                        <Text>{score}</Text>
                                    </Inline>
                                </Tooltip>
                            </Column>
                            <Column width="4/12">
                                <Tooltip tooltip="First place">
                                    <Inline alignY="center" space="xxsmall" align="center">
                                        <FirstPlace />
                                        <Text>{firstPlace ?? '--'}</Text>
                                    </Inline>
                                </Tooltip>
                            </Column>
                            <Column width="4/12">
                                <Tooltip tooltip="Second place">
                                    <Inline alignY="center" space="xxsmall" align="center">
                                        <SecondPlace />
                                        <Text>{secondPlace ?? '--'}</Text>
                                    </Inline>
                                </Tooltip>
                            </Column>
                        </Columns>
                    </Stack>
                </Spacing>
            </st.Container>
        </Spacing>
    )
};

ModuleCard.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    score: PropTypes.number,
    firstPlace: PropTypes.number,
    secondPlace: PropTypes.number
}

ModuleCard.defaultProps = {
    avatar: null,
    username: null,
    score: 0,
    firstPlace: 0,
    secondPlace: 0
}

export { ModuleCard };