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

const ModuleCard = ({ avatar, full_name, score, first_place, second_place }) => {
    return (
        <Spacing py="small">
            <st.Container>
                <Spacing py="large" px="gutter">
                    <Stack>
                        <Inline align="center">
                            <st.Image src={avatar} alt="profile-photo"/>
                        </Inline>
                        <Spacing p="small">
                        <Text align="center" weight="medium" color="black400" size="lg">{full_name}</Text>
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
                                        <Text data-testid="first-place">{first_place ?? '--'}</Text>
                                    </Inline>
                                </Tooltip>
                            </Column>
                            <Column width="4/12">
                                <Tooltip tooltip="Second place">
                                    <Inline alignY="center" space="xxsmall" align="center">
                                        <SecondPlace />
                                        <Text data-testid="second-place">{second_place ?? '--'}</Text>
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
    full_name: PropTypes.string,
    first_name: PropTypes.string,
    score: PropTypes.number,
    first_place: PropTypes.number,
    second_place: PropTypes.number
}

ModuleCard.defaultProps = {
    avatar: null,
    full_name: null,
    first_name: null,
    score: 0,
    first_place: 0,
    second_place: 0
}

export default ModuleCard;