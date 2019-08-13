import React, { Component } from 'react';
import s from "./Popap-comp.module.css";






let Popap__comp = () =>{
    return(
        <div className = {s.wrapper__popap__comp}>
             <div class="container">
        <div class="row">
            <div class="col-xl-12 d-flex justify-content-center">
                <button class = "main-button"><i class="fas fa-plus"></i></button>
            </div>
        </div>
    </div>

    <div class="container modal-wrapper">
        <div class="row header-modal d-flex align-items-center">
        <div class="col-xl-5">
            <button><i class="fas fa-plus-circle"></i></button>
            <button><i class="fas fa-minus-circle"></i></button>
            <button><i class="fas fa-times-circle"></i></button>
        </div>
        <div class="col-xl-6">
            <h2>
                create action
            </h2>
        </div>
        </div>
        <div class="row">
            <div class="col">
                    <input class = "input-name" type = "text" placeholder="Enter S-Ckicker name" id = "name"></input>

            </div>
            
        </div>
        <div class="row">
            <div class="col-5">
                    <input class ="input-key" type = "text" id = "key" placeholder="Enter Key"></input>
            </div>
            <div class="col-7 d-flex align-items-end">
                    <button class = "enter-key-button"><i class="fas fa-plus"></i></button>
            </div>
           
           
        </div>
        <div class="row">
            <div class="col">
                    <textarea></textarea>
            </div>
         
        </div>
        <div class="row">
            <div class="col-auto">

                    <div class = "select-wrapper">
                           <label for="select-country"> <i class="fas fa-caret-down"></i></label>

                            <select class = "select-country" name="select" id="select-country">
                                    <option value="">Select Country </option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>

                              

                    </div>
                    

            </div>
            
        </div>
            <div class="row">
                <div class="col-auto">
                        <span class = "text-of-time">Enter working time (UTC)</span>
                </div>
                
            </div>

            <div class="row">
                <div class="col-2 d-flex flex-column">
                        <span>
                                Start
                            </span>
                            <input class = "date-input" type = "date"></input>

                            <input class = "time-input" type = "text" placeholder="HH:MM"></input>

                </div>
                <div class="col-2 d-flex flex-column">
                        <span>
                                End
                            </span>
                            <input class = "date-input" type = "date"></input>
                            <input class = "time-input" type = "text" placeholder="HH:MM"></input>
                        </div>
        
                        
                </div>
                <div class="row button-wrapper">
                    <div class="col d-flex justify-content-end">
                            <input type="submit" value = "submit"></input>
                            <input type = "button" value ="cansel"></input>
                        
                    </div>
                </div>
               
            </div>
            
                
            
                    

        </div>
        
    )
}

export default Popap__comp;