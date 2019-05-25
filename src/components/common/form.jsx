import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
class Form extends Component {
    state = { 
        data: {},
        errors: {}
     }

     handleSubmit = e => {
        e.preventDefault();
        
        console.log(this.state);
        //  Calling Server
       const errors = this.validate();
       console.log(errors);
        this.setState({errors: errors || {}});
        if(errors)
        return;
        this.doSubmit(e);
    };

    validate = () => {
        const { data } = this.state;
        const errors = {};
        const valResult = Joi.validate(this.state.data, this.schema, {abortEarly: false});
        if(!valResult.error) return null;
        for(let item of valResult.error.details) errors[item.path[0]] = item.message;
            return errors;
    };

    validateProperty = ({name, value}) => {
        debugger;
        const obj = {[name]: value};
        const objSchema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, objSchema);
        return error? error.details[0].message: null;
    };

    handleChange = ({currentTarget: input}) => {
       const data = {...this.state.data};
       data[input.name] = input.value;
       const errors = {...this.state.errors};
       const errMessage = this.validateProperty(input);
       errMessage? errors[input.name] = errMessage
       : delete errors[input.name];
       this.setState({data: data, errors});
    };

    renderButton(label){
        return (
            <button 
                    disabled={this.validate()}
                    className="btn btn-primary">{label}</button>
        );
    }
    renderInput(name, label, type="text"){
        debugger;
        const {data, errors} = this.state;
        return(
            <Input
            label= {label}
            OnChange={this.handleChange}
            value={data[name]}
            fieldName= {name}
            type={type}
            error={errors[name]} />
        );
    }
}
 
export default Form;