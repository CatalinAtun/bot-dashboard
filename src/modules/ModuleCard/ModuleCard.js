import React from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { Columns, Column, Spacing, Inline, Text, Stack, Tooltip } from '@cornershop/cornponents';

import { FirstPlace, SecondPlace } from '../../components/Icons';
import * as st from './styles';

const renderScoreIcon = (score) => {
    if (score === 0) {
        return <FaPlusCircle color="gray" data-testid="positive-score"/>
    }
    if (score < 1) {
        return <FaMinusCircle color="red" data-testid="negative-score"/>
    }
    if (score > 0) {
        return <FaPlusCircle color="green" data-testid="positive-score"/>
    }
}

const ModuleCard = ({ avatar, fullName, score, firstPlace, secondPlace }) => {
    return (
        <Spacing py="small">
            <st.Container>
                <Spacing py="large" px="gutter">
                    <Stack>
                        <Inline align="center">
                            <st.Image src={avatar} alt="profile-photo"/>
                        </Inline>
                        <Spacing p="small">
                        <Text align="center" weight="medium" color="black400" size="lg">{fullName}</Text>
                        </Spacing>
                        <Columns align="center">
                            <Column width="4/12">
                                <Tooltip tooltip="Actual score">
                                    <Inline alignY="center" space="xxsmall" align="center">
                                        {renderScoreIcon(score)}
                                        <Text data-testid="score">{score}</Text>
                                    </Inline>
                                </Tooltip>
                            </Column>
                            <Column width="4/12">
                                <Tooltip tooltip="First place">
                                    <Inline alignY="center" space="xxsmall" align="center">
                                        <FirstPlace />
                                        <Text data-testid="first-place">{firstPlace ?? '--'}</Text>
                                    </Inline>
                                </Tooltip>
                            </Column>
                            <Column width="4/12">
                                <Tooltip tooltip="Second place">
                                    <Inline alignY="center" space="xxsmall" align="center">
                                        <SecondPlace />
                                        <Text data-testid="second-place">{secondPlace ?? '--'}</Text>
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
    fullName: PropTypes.string,
    firstName: PropTypes.string,
    score: PropTypes.number,
    firstPlace: PropTypes.number,
    secondPlace: PropTypes.number
}

ModuleCard.defaultProps = {
    avatar: null,
    fullName: null,
    firstName: null,
    score: 0,
    firstPlace: 0,
    secondPlace: 0
}

export default ModuleCard;