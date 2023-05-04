import React from 'react'

class Position extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            count: props.count,
            profile: props.profile,
            vendor: props.vendor,
            note: props.note
        }
    }

    changeColor = (color) => {
        this.setState({color: color})
    }

    getColor(props) {
        return {color: props.color}
    }

    changeCount = (count) => {
        this.setState({count: count})
    }

    getCount(props) {
        return {count: props.count}
    }

    changeProfile = (profile) => {
        this.setState({profile: profile})
    }

    getProfile(props) {
        return {profile: props.profile}
    }

    changeVendor = (vendor) => {
        this.setState({vendor: vendor})
    }

    getVendor(props) {
        return {vendor: props.vendor}
    }

    changeNote = (note) => {
        this.setState({note: note})
    }

    getNote(props) {
        return {note: props.note}
    }

}