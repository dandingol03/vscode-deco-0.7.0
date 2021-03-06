/**
 *    Copyright (C) 2015 Deco Software Inc.
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU Affero General Public License, version 3,
 *    as published by the Free Software Foundation.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU Affero General Public License for more details.
 *
 *    You should have received a copy of the GNU Affero General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

import _ from 'lodash'
import React, { Component, } from 'react'
import { connect } from 'react-redux'

import PaneHeader from '../components/headers/PaneHeader'
import NoContent from '../components/display/NoContent'
import LiveValue from '../components/inspector/LiveValue'
import FormHeader from '../components/forms/FormHeader'

import {toValue, toCode} from '../utils/Parser'
import {setLiveValueCode, setLiveValueMetadataField} from '../actions/liveValueActions'

const style = {
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  alignItems: 'stretch',
  overflow: 'hidden',
  minHeight: 0,
}

const innerStyle = {
  paddingTop: 5,
  paddingBottom: 5,
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  alignItems: 'stretch',
  overflowX: 'hidden',
  overflowY: 'auto',
  minHeight: 0,
}

const UNGROUPED = '__ungrouped__'

class LiveValueInspector extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {liveValues: oldLiveValues, width: oldWidth} = this.props
    const {liveValues: newLiveValues, width: newWidth} = nextProps

    if (oldWidth === newWidth && _.isEqual(oldLiveValues, newLiveValues)) {
      return false
    }

    return true
  }

  handleLiveValueChange(id, value, updatedValue) {

    // Prevent excessive changes
    if (value === updatedValue) {
      return
    }

    const code = toCode(updatedValue)
    this.props.dispatch(setLiveValueCode(this.props.decoDoc.id, id, code))
  }

  handleLiveValueMetadataChange(id, metadata, fieldName, updatedValue) {
    const value = metadata[fieldName]

    // Prevent excessive changes
    if (value === updatedValue) {
      return
    }

    this.props.dispatch(setLiveValueMetadataField(this.props.decoDoc.id, id, fieldName, updatedValue))
  }

  renderContent() {
    if (! this.props.decoDoc) {
      return (
        <NoContent>No document selected</NoContent>
      )
    } else {
      return _.map(this.props.groups, (liveValues, groupName) => {

        const depth = groupName === UNGROUPED ? 0 : 1
        const inset = depth * 15

        return (
          <div key={groupName}>
            {
              groupName !== UNGROUPED && (
                <FormHeader label={groupName} />
              )
            }
            {_.map(liveValues, ({id, value, metadata}) => {
              return (
                <LiveValue
                  key={id}
                  id={id}
                  value={value}
                  metadata={metadata}
                  onChange={this.handleLiveValueChange.bind(this, id, value)}
                  onMetadataChange={this.handleLiveValueMetadataChange.bind(this, id, metadata)}
                  inset={inset}
                  width={this.props.width} />
              )
            })}
            <div id='fake-render'>
                <iframe width={this.props.width} height={500} src="/build/"
                            frameBorder="no" border="0" style={{margin:0,border:0}} scrolling="no" allowTransparency="yes"/> 
            </div>
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div style={style}>
        <PaneHeader text={'Properties'} />
        <div style={innerStyle}>
          {this.renderContent()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const doc = ownProps.decoDoc
  let liveValues = null
  let groups = null

  if (doc) {
    liveValues = _.map(doc.getCodeForDecoRanges(), ({id, code}) => {
      return {
        id,
        value: toValue(code),
        metadata: state.metadata.liveValues.liveValuesById[id],
      }
    })

    groups = _.groupBy(liveValues, (liveValue) => {
      return liveValue.metadata.group || UNGROUPED
    })
  }

  return {
    groups,
    liveValues,
    ...ownProps,
  }
}

export default connect(mapStateToProps)(LiveValueInspector)
