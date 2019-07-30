function init() {



    /*--------------------------------Viev--------------------------------*/
        const view = {
            demo: function() {
                function func(a,b, ...arr) {
                    console.log(a,b, arr);
                }     
                func(1,2,3,4,5,6,7,8); 

                console.log('')               
            },
            start: function(e) {
                document.querySelector('.hide').classList.remove('hide');
                document.getElementById('container').classList.add('hide');
            },
            showEditWindow: function () {

                currentRow = this;
                const arr  = [];
                let   n    = currentRow.parentElement.parentElement.count;

                editForm.elements[1].value   = stuf[n].type;
                editForm.elements[2].value   = stuf[n].name;
                editForm.elements[3].value   = stuf[n].surname;
                editForm.elements[4].value   = stuf[n].patronym;
                editForm.elements[5].value   = stuf[n].age;
                editForm.elements[6].checked = stuf[n].hasChildren;
                editForm.elements[7].value   = stuf[n].status;
                editForm.elements[8].value   = stuf[n].expiriens;
                editForm.elements[9].value   = stuf[n].dateOfEmployment;
                editForm.elements[10].value  = stuf[n].organization;
                
                document.querySelector('#edit-window').classList.add('active');
            },
            cleanForm: function () {
                createForm.elements.forEach(function(el){
                    if(el.tagName === 'INPUT') {
                        el.value = '';
                    }
                });
                editForm.elements.forEach(function(el){
                    if(el.tagName === 'INPUT') {
                        el.value = '';
                    }
                });
            },
            showCreateWindow: e => {
                e.preventDefault();
                document.querySelector('#create-window').classList.add('active')
            },
            closeCreateWindow: e => {
                e.preventDefault();
                document.querySelector('#create-window').classList.remove('active')
            },
            closeEditWindow: e => {
                e.preventDefault();
                document.querySelector('#edit-window').classList.remove('active');
            },
            newRow: function () {
                this.removeAllRows();
                const row = document.createElement('div');
                row.classList.add('table__row');
                row.classList.add('for-fill');

                stuf.forEach(function(el, i) {
                    mainTable.appendChild(row.cloneNode()); // добавляем ряд в таблицу


                });

                countOfRow++;
                this.fillRow();
            },
            fillRow: function () {
                const rows = document.querySelectorAll('.for-fill');
                rows.forEach = Array.prototype.forEach;
                function status(i) {
                    let str = '';
                    switch (stuf[i].status) {
                        case 'cleaner':
                            str = 'уборщица';
                            break;
                        case 'proger':
                            str = 'программист';
                            break;
                        case 'teacher':
                            str = 'учитель';
                            break;
                        default:
                            // statements_def
                            break;
                    }
                    switch (stuf[i].vehicle) {
                        case 'bus':
                            str = 'водитель автобуса';
                            break;
                        case 'car':
                            str = 'водитель автомобилья';
                            break;
                        case 'guzh':
                            str = 'водитель повозки';
                            break;
                        default:
                            // statements_def
                            break;
                    }

                    return str;
                }

                
                rows.forEach(function(el, i){
                    // деструктуризация
                    let {name, surname, age, organization} = stuf[i];
                    el.count = i;
                    el.innerHTML += `<div class="table__cell">${name}</div>`;
                    el.innerHTML += `<div class="table__cell">${surname}</div>`;
                    el.innerHTML += `<div class="table__cell">${age}</div>`;
                    el.innerHTML += `<div class="table__cell">${organization}</div>`;
                    el.innerHTML += `<div class="table__cell">${status(i)}</div>`;
                    el.innerHTML += `<div class="table__cell table__cell-btns">
                    <button class="full-info">подробнее</button>
                    <button class="edit">редактировать</button>
                    <button class="delete">удалить</button></div>`;
                });

                const arrBtnsEdit     = document.querySelectorAll('.edit'),
                      arrBtnsDelete   = document.querySelectorAll('.delete'),
                      arrBtnsFullInfo = document.querySelectorAll('.full-info');

                // цикл записать в фунцю в control
                for (let i = 0; i < arrBtnsEdit.length; i++) {
                    arrBtnsEdit[i].addEventListener('click', view.showEditWindow);
                    arrBtnsDelete[i].addEventListener('click', model.delete);
                    arrBtnsFullInfo[i].addEventListener('click', view.showFullInfo);
                }
                
            },
            removeAllRows: function () {

                let length = mainTable.children.length
                for (var i = 0; i < length; i++) {
                    if(i === 0) continue;
                    mainTable.children[mainTable.children.length - 1].remove();     
                }
            },

            showFullInfo: function() {
                console.log('op');

                currentRow = this;
                let n      = currentRow.parentElement.parentElement.count;
                let rowsInd   = document.querySelectorAll('.row-ind'); 
                let rowsTr  = document.querySelectorAll('.row-tr'); 

                if(stuf[n]._self === 'industrial') {
                    document.querySelector('#allInfo').classList.add('active');     
                    rowsInd[0].children[1].innerHTML = stuf[n].type === 'val-1' ? 'индустриальное' : 'транспортное';
                    rowsInd[1].children[1].innerHTML = stuf[n].name;
                    rowsInd[2].children[1].innerHTML = stuf[n].surname;
                    rowsInd[3].children[1].innerHTML = stuf[n].patronym;
                    rowsInd[4].children[1].innerHTML = stuf[n].age;
                    rowsInd[5].children[1].innerHTML = stuf[n].hasChildren ? 'Есть' : 'Нет';
                    rowsInd[6].children[1].innerHTML = stuf[n].status;
                    rowsInd[7].children[1].innerHTML = stuf[n].expiriens;
                    rowsInd[8].children[1].innerHTML = stuf[n].dateOfEmployment;
                    rowsInd[9].children[1].innerHTML = stuf[n].organization;

                } else {

                    document.querySelector('#allInfo-2').classList.add('active');         
                    rowsTr[0].children[1].innerHTML = stuf[n].type === 'val-1' ? 'индустриальное' : 'транспортное';
                    rowsTr[1].children[1].innerHTML = stuf[n].name;
                    rowsTr[2].children[1].innerHTML = stuf[n].surname;
                    rowsTr[3].children[1].innerHTML = stuf[n].patronym;
                    rowsTr[4].children[1].innerHTML = stuf[n].age;
                    rowsTr[5].children[1].innerHTML = stuf[n].hasChildren ? 'Есть' : 'Нет';
                    rowsTr[6].children[1].innerHTML = stuf[n].vehicle;
                    rowsTr[7].children[1].innerHTML = stuf[n].expiriens;
                    rowsTr[8].children[1].innerHTML = stuf[n].dateOfEmployment;
                    rowsTr[9].children[1].innerHTML = stuf[n].organization;

                }

         
            },
            fullInfoClose: function() {
                // console.log('op')
                this.parentElement.classList.remove('active');
            },
            changeForm: function() {
                // console.log('op')
                if (this.value === 'val-2') {
                    document.querySelectorAll('.change')[0].classList.add('active');
                    document.querySelectorAll('.change')[1].classList.add('active');
                    document.querySelectorAll('.change-edit')[0].classList.add('active');
                    document.querySelectorAll('.change-edit')[1].classList.add('active');
                } else {
                    document.querySelectorAll('.change')[0].classList.remove('active');
                    document.querySelectorAll('.change')[1].classList.remove('active');
                    document.querySelectorAll('.change-edit')[0].classList.remove('active');
                    document.querySelectorAll('.change-edit')[1].classList.remove('active');
                }
            }

        }
    /*--------------------------------end Viev--------------------------------*/

    /*--------------------------------Model--------------------------------*/
        const model = {

            ajaxGet: function() {
             
              let request = new XMLHttpRequest();

              request.onreadystatechange = function () {

                if(request.readyState == 4 && request.status == 200) {
                  // console.log(request.responseText)
                  // $('.box').html(request.responseText);

                }else{

                  $('.box').html('ошибка');

                }

              }

              request.open('POST', 'server.html');

              request.send()
            },

            changeInfo: function(self) {

                let arr     = model.getInfo(editForm);
                let n       = currentRow.parentElement.parentElement.count;
                let counter = 0;

                if(stuf[n].self === 'industr') {

                    stuf[n].type             = editForm.elements[1].value; 
                    stuf[n].name             = editForm.elements[2].value; 
                    stuf[n].surname          = editForm.elements[3].value; 
                    stuf[n].patronym         = editForm.elements[4].value; 
                    stuf[n].age              = editForm.elements[5].value; 
                    stuf[n].hasChildren      = editForm.elements[6].checked; 
                    stuf[n].status           = editForm.elements[7].value; 
                    stuf[n].expiriens        = editForm.elements[8].value; 
                    stuf[n].dateOfEmployment = editForm.elements[9].value; 
                    stuf[n].organization     = editForm.elements[10].value;

                } else {

                    stuf[n].type             = editForm.elements[1].value; 
                    stuf[n].name             = editForm.elements[2].value; 
                    stuf[n].surname          = editForm.elements[3].value; 
                    stuf[n].patronym         = editForm.elements[4].value; 
                    stuf[n].age              = editForm.elements[5].value; 
                    stuf[n].hasChildren      = editForm.elements[6].checked; 
                    stuf[n].vehicle          = editForm.elements[7].value; 
                    stuf[n].expiriens        = editForm.elements[8].value; 
                    stuf[n].dateOfEmployment = editForm.elements[9].value; 
                    stuf[n].organization     = editForm.elements[10].value;

                }

                view.newRow();


            },

            getInfo: function (form) {

                const info = []; // инфа из формы
                // form.elements.forEach(function(el){
                createInputs.forEach(function(el){
                   
                    if(el.tagName === 'INPUT' || el.tagName === 'SELECT') {

                        if(el.type === 'checkbox') info.push(el.checked); 
                        else info.push(el.value);

                    }

                });

                return info;
            },
            createEmployee: function (e) {
                e.preventDefault();
                // получаем массив данныйх из формы
                if(isValid) {
                    const arr  = model.getInfo(createForm); 
                    console.log(arr)
                    const opts = {};

                    [
                        opts.type,             
                        opts.name,             
                        opts.surname,        
                        opts.patronym,       
                        opts.age,          
                        opts.hasChildren,  
                        opts.status,    
                        opts.vehicle,      
                        opts.expiriens,      
                        opts.dateOfEmployment,
                        opts.organization
                    ] = arr;



                    switch (createSelect_1.value) {
                        case 'val-1':
                            stuf.push(new model.EmployeeIndustr(opts));
                            break;
                        case 'val-2':
                            stuf.push(new model.EmployeeTrans(opts));
                            break;
                    }
                   
                    view.newRow();

                } else {
                    alert('не корректно заполнена форма!');
                }
            },

            Person: function (obj) {
                this.name     = obj.name     || 'не указано';
                console.log(this.name)
                this.age      = obj.age      || 'не указано';
                this.surname  = obj.surname  || 'не указано';
                this.patronym = obj.patronym || 'не указано';
            },

            EmployeeIndustr: function (obj) {
                model.Person.call(this, obj);
                this._self = 'industrial';
                this.type             = obj.type;
                this.hasChildren      = obj.hasChildren;
                this.status           = obj.status;
                this.expiriens        = obj.expiriens        || 'не указано';
                this.dateOfEmployment = obj.dateOfEmployment || 'не указано';
                this.organization     = obj.organization;
                console.log(obj)
            },
            EmployeeTrans: function (obj) {
                model.Person.call(this, obj);
                this._self = 'transport';
                this.type             = obj.type;
                this.hasChildren      = obj.hasChildren;
                this.expiriens        = obj.expiriens        || 'не указано';
                this.dateOfEmployment = obj.dateOfEmployment || 'не указано';
                this.organization     = obj.organization;
                this.vehicle = obj.vehicle;

            },

            validate: function() {

                // console.dir(this.id)
                const arr = this.value.split('');   
                function func(el) {
                    return el.charCodeAt() < 57;
                }

                switch (this.id) {
                    
                    case 'name':
                        if(arr.some(func)) {
                            alert('поле не должно содержать числа');
                            isValid = false;
                        } else {
                            isValid = true;
                        }
                        break;
                    case 'surname':
                        if(arr.some(func)) {
                            alert('поле не должно содержать числа');
                            isValid = false;
                        } else {
                            isValid = true;
                        }
                        break;
                    case 'patronym':

                        if(arr.some(func)) {
                            alert('поле не должно содержать числа');
                            isValid = false;
                        } else {
                            isValid = true;
                        }
                        break;
                    case 'name-editForm':

                        if(arr.some(func)) {
                            alert('поле не должно содержать числа');
                            isValid = false;
                        } else {
                            isValid = true;
                        }
                        break;
                    case 'surname-editForm':

                        if(arr.some(func)) {
                            alert('поле не должно содержать числа');
                            isValid = false;
                        } else {
                            isValid = true;
                        }
                        break;
                    case 'patronym-editForm':

                        if(arr.some(func)) {
                            alert('поле не должно содержать числа');
                            isValid = false;
                        } else {
                            isValid = true;
                        }
                        break;
                    case 'expiriens' || 'expiriens-editForm':

                        if(+this.value >= 50) {
                            alert('стаж не может быть больше 50 лет')
                            isValid = false;
                        } else if(+this.value <= 0) {
                            alert('стаж дольжен быть больше 0 лет')
                            isValid = false;
                        } else {
                            isValid = true;
                        }
                        break;
                    case 'expiriens-editForm':

                        if(+this.value >= 50) {
                            alert('стаж не может быть больше 50 лет');
                            isValid = false;
                        } else if(+this.value <= 0) {
                            alert('стаж дольжен быть больше 0 лет');
                            isValid = false;
                        } else {
                            isValid = true;
                        }
                        break;
                }

                
            },
            delete: function() {

                currentRow = this;
                let n = currentRow.parentElement.parentElement.count;

                if(confirm('Вы уверены что хотите удалить?')) {
                   stuf.splice(n,1);
                   view.newRow(); 
                }

            },
            loadToBD: function() {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', '/homework3', false);
                xhr.setRequestHeader("Content-type","application/json");
                xhr.send(JSON.stringify(upl[i]));
                
            },
            editWindow: function() {

                const 
                    popup        = document.createElement('div'),
                    btn          = document.createElement('button'),
                    btnChange    = document.createElement('button'),
                    btnClean     = document.createElement('button'),
                    title        = document.createElement('h2'),
                    form         = document.createElement('form'),
                    field        = document.createElement('div'),
                    left         = document.createElement('div'),
                    right        = document.createElement('div');

                    popup.id = 'edit-window';
                    form.id  = 'edit-form';
                    btn.id   = 'close-edit-window';
                    btn.classList.add('close');
                    field.classList.add('form__field');
                    btnChange.type = 'submit';
                    btnChange.id = 'form-change-btn';
                    btnChange.innerText = 'обновить';
                    btnChange.classList.add('form__create-btn');
                    btnClean.type = 'submit';
                    btnClean.id = 'form-edit-clean-btn';
                    btnClean.innerText = 'очистить';
                    btnClean.classList.add('form__clean-btn');

                    btn.innerText = 'закрыть'; 
                    form.appendChild(btn);

                    

                    /*------- fields -------------*/
                        const fields = [];

                        fields[0]  = field.cloneNode();
                        fields[1]  = field.cloneNode();
                        fields[2]  = field.cloneNode();
                        fields[3]  = field.cloneNode();
                        fields[4]  = field.cloneNode();
                        fields[5]  = field.cloneNode();
                        fields[6]  = field.cloneNode();
                        fields[7]  = field.cloneNode();
                        fields[8]  = field.cloneNode();
                        fields[9]  = field.cloneNode();
                        fields[10] = field.cloneNode();

                        fields[0].innerHTML = 
                        `   
                            <div class="form__field-left">Тип записи</div>
                            <div class="form__field-right">
                              <select name="create-form-select" id="select-1">
                                <option id="indusrt" value="val-1">рабочий индустриального предприятия</option>
                                <option id="transp" value="val-2">рабочий транспортного предприятия</option>
                              </select>
                            </div>
                        `;

                        fields[1].innerHTML = 
                        `   
                            <div class="form__field-left">Имя</div>
                            <div class="form__field-right">
                              <input id="name-editForm" type="text" value="">
                            </div>  
                        `;
                        
                        fields[2].innerHTML = 
                        `   
                            <div class="form__field-left">Фамилия</div>
                            <div class="form__field-right">
                              <input id="surname-editForm" type="text" value="">
                            </div>  
                        `;
                        
                        fields[3].innerHTML = 
                        `   
                            <div class="form__field-left">Отчество</div>
                            <div class="form__field-right">
                              <input id="patronym-editForm" type="text" value="">
                            </div>  
                        `;   

                        fields[4].innerHTML = 
                        `   
                            <div class="form__field-left">Возраст</div>
                            <div class="form__field-right">
                              <input id="age-editForm" type="text" value="">
                            </div>  
                        `;
                        

                        fields[5].innerHTML = 
                            `   
                                <div class="form__field">
                                  <div class="form__field-left">Наличие Детей</div>
                                  <div class="form__field-right">
                                    <input type="checkbox">
                                  </div>    
                                </div>
                            `;

                        fields[6].innerHTML = 
                            `   
                                <div class="form__field-left">Статус</div>
                                <div class="form__field-right">
                                  <select name="create-form-select" id="select-3" class="create-ipn">
                                    <option value="proger">программист</option>
                                    <option value="cleaner">уборщик</option>
                                    <option value="teacher">препод</option>
                                  </select>
                                </div>
                            `;
                        fields[7].innerHTML = 
                            `   
                                <div class="form__field-left">Водитель</div>
                                <div class="form__field-right">
                                  <select name="create-form-select" id="select-3" class="create-ipn">
                                    <option value="bus">автобуса</option>
                                    <option value="car">автомобиля</option>
                                    <option value="guzh">гужевой повозки</option>
                                  </select>
                                </div>
                            `;
                        fields[8].innerHTML = 
                            `   
                                <div class="form__field-left">Стаж</div>
                                <div class="form__field-right">
                                  <input id="expiriens-editForm" type="number" value="" class="create-ipn">
                                </div>
                            `;
                        fields[9].innerHTML = 
                            `   
                                <div class="form__field-left">Дата принятия на работу</div>
                                <div class="form__field-right">
                                  <input type="text" value="" placeholder="dd.mm.yyyy" class="create-ipn">
                                </div> 
                            `;
                        fields[10].innerHTML = 
                            `   
                                <div class="form__field-left">Организация</div>
                                <div class="form__field-right">
                                  <select name="create-form-select" id="select-3" class="create-ipn">
                                    <option value="ormedia">ormedia</option>
                                    <option value="epam">epam</option>
                                    <option value="ЖЭУ">ЖЭУ</option>
                                  </select>
                                </div>
                            `;

                        fields[6].classList.add('change-edit');
                        fields[6].classList.add('status-edit');
                        fields[7].classList.add('change-edit');
                        fields[7].classList.add('driver-edit');

                        fields.forEach(el => {
                            form.appendChild(el);
                        });
                    /*----end -> fields ----------*/
                        

                popup.appendChild(form);
                form.appendChild(btnChange);
                form.appendChild(btnClean);
                document.getElementsByTagName('body')[0].appendChild(popup);

            },
            createWindow: function() {

                const 
                    popup        = document.createElement('div'),
                    btn          = document.createElement('button'),
                    btnCreate    = document.createElement('button'),
                    btnClean     = document.createElement('button'),
                    title        = document.createElement('h2'),
                    form         = document.createElement('form'),
                    field        = document.createElement('div'),
                    left         = document.createElement('div'),
                    right        = document.createElement('div');

                    popup.id = 'create-window';
                    form.id  = 'create-form';
                    form.classList.add('create-form');
                    form.classList.add('form');
                    btn.id   = 'close-create-window';
                    btn.classList.add('close');
                    field.classList.add('form__field');
                    btnCreate.type = 'submit';
                    btnCreate.id = 'form-create-btn';
                    btnCreate.innerText = 'Сохранить';
                    btnCreate.classList.add('form__create-btn');
                    btnClean.type = 'submit';
                    btnClean.id = 'form-clean-btn';
                    btnClean.innerText = 'Очистить';
                    btnClean.classList.add('form__clean-btn');

                    btn.innerText = 'закрыть'; 
                    form.appendChild(btn);

                    

                    /*------- fields -------------*/
                        const fields = [];

                        fields[0]  = field.cloneNode();
                        fields[1]  = field.cloneNode();
                        fields[2]  = field.cloneNode();
                        fields[3]  = field.cloneNode();
                        fields[4]  = field.cloneNode();
                        fields[5]  = field.cloneNode();
                        fields[6]  = field.cloneNode();
                        fields[7]  = field.cloneNode();
                        fields[8]  = field.cloneNode();
                        fields[9]  = field.cloneNode();
                        fields[10] = field.cloneNode();

                        fields[0].innerHTML = 
                        `   
                            <div class="form__field-left">Тип записи</div>
                            <div class="form__field-right">
                              <select name="create-form-select" id="create-select-1" class="create-ipn">
                                <option id="indusrt" value="val-1">рабочий индустриального предприятия</option>
                                <option id="transp" value="val-2">рабочий транспортного предприятия</option>
                              </select>
                            </div>
                        `;

                        fields[1].innerHTML = 
                        `   
                            <div class="form__field-left">Имя</div>
                            <div class="form__field-right">
                              <input id="name" type="text" value="" class="create-ipn">
                            </div>  
                        `;
                        
                        fields[2].innerHTML = 
                        `   
                            <div class="form__field-left">Фамилия</div>
                            <div class="form__field-right">
                              <input id="surname" type="text" value="" class="create-ipn">
                            </div>  
                        `;
                        
                        fields[3].innerHTML = 
                        `   
                            <div class="form__field-left">Отчество</div>
                            <div class="form__field-right">
                              <input id="patronym" type="text" value="" class="create-ipn">
                            </div>  
                        `;   

                        fields[4].innerHTML = 
                        `   
                            <div class="form__field-left">Возраст</div>
                            <div class="form__field-right">
                              <input id="age" type="text" value="" class="create-ipn">
                            </div>  
                        `;
                        

                        fields[5].innerHTML = 
                            `   
                                <div class="form__field">
                                  <div class="form__field-left">Наличие Детей</div>
                                  <div class="form__field-right">
                                    <input type="checkbox" class="create-ipn">
                                  </div>    
                                </div>
                            `;

                        fields[6].innerHTML = 
                            `   
                                <div class="form__field-left">Статус</div>
                                <div class="form__field-right">
                                  <select name="create-form-select" id="select-3" class="create-ipn">
                                    <option value="proger">программист</option>
                                    <option value="cleaner">уборщик</option>
                                    <option value="teacher">препод</option>
                                  </select>
                                </div>
                            `;
                        fields[6].classList.add('change');
                        fields[6].classList.add('status');
                        fields[7].innerHTML = 
                            `   
                                <div class="form__field-left">Водитель</div>
                                <div class="form__field-right">
                                  <select name="create-form-select" id="select-3" class="create-ipn">
                                    <option value="bus">автобуса</option>
                                    <option value="car">автомобиля</option>
                                    <option value="guzh">гужевой повозки</option>
                                  </select>
                                </div>
                            `;
                        fields[7].classList.add('change');
                        fields[7].classList.add('driver');
                        fields[8].innerHTML = 
                            `   
                                <div class="form__field-left">Стаж</div>
                                <div class="form__field-right">
                                  <input id="expiriens" type="number" value="" class="create-ipn">
                                </div>
                            `;
                        fields[9].innerHTML = 
                            `   
                                <div class="form__field-left">Дата принятия на работу</div>
                                <div class="form__field-right">
                                  <input type="text" value="" placeholder="dd.mm.yyyy" class="create-ipn">
                                </div> 
                            `;
                        fields[10].innerHTML = 
                            `   
                                <div class="form__field-left">Организация</div>
                                <div class="form__field-right">
                                  <select name="create-form-select" id="select-3" class="create-ipn">
                                    <option value="ormedia">ormedia</option>
                                    <option value="epam">epam</option>
                                    <option value="ЖЭУ">ЖЭУ</option>
                                  </select>
                                </div>
                            `;

                        fields.forEach(el => {
                            form.appendChild(el);
                        });
                    /*----end -> fields ----------*/
                        

                popup.appendChild(form);
                form.appendChild(btnCreate);
                form.appendChild(btnClean);
                document.getElementsByTagName('body')[0].appendChild(popup);

            },
            infoWindow_1: function() {

                const 
                    popup        = document.createElement('div'),
                    btn          = document.createElement('button'),
                    row          = document.createElement('div');
                    

                    popup.id = 'allInfo';
                    popup.classList.add('allInfo')
                    btn.id   = 'allInfo-close';
                    btn.innerText = 'Закрыть';

                    popup.appendChild(btn);
                                       

                    /*------- fields -------------*/
                        const rows = [];

                        rows[0]  = row.cloneNode();
                        rows[1]  = row.cloneNode();
                        rows[2]  = row.cloneNode();
                        rows[3]  = row.cloneNode();
                        rows[4]  = row.cloneNode();
                        rows[5]  = row.cloneNode();
                        rows[6]  = row.cloneNode();
                        rows[7]  = row.cloneNode();
                        rows[8]  = row.cloneNode();
                        rows[9]  = row.cloneNode();
                        rows[10] = row.cloneNode();

                        rows[0].innerHTML = 
                        `   
                            <div class="name">Тип записи</div>
                            <div class="value">121</div>
                        `;
                        
                        rows[1].innerHTML = 
                        `   
                            <div class="name">Имя</div>
                            <div class="value">121</div>
                        `;
                        
                        rows[2].innerHTML = 
                        `   
                           <div class="name">Фамилия</div>
                           <div class="value"></div> 
                        `;   

                        rows[3].innerHTML = 
                        `   
                            <div class="name">Отчество</div>
                            <div class="value"></div> 
                        `;
                        

                        rows[4].innerHTML = 
                            `   
                                <div class="name">Возраст</div>
                                <div class="value"></div>
                            `;

                        rows[5].innerHTML = 
                            `   
                                <div class="name">Наличие Детей</div>
                                <div class="value"></div>
                            `;
                        rows[6].innerHTML = 
                            `   
                                <div class="name">Должность</div>
                                <div class="value"></div>
                            `;
                        rows[7].innerHTML = 
                            `   
                                <div class="name">Опыт</div>
                                <div class="value"></div>
                            `;
                        rows[8].innerHTML = 
                            `   
                                <div class="name">Дата принятия</div>
                                <div class="value"></div>
                            `;
                        rows[9].innerHTML = 
                            `   
                                <div class="row-ind">
                                  <div class="name">Организация</div>
                                  <div class="value"></div>
                                </div>
                            `;

                        rows.forEach(el => {
                            el.classList.add('row-ind');
                            popup.appendChild(el);
                        });
                    /*----end -> fields ----------*/
                        
                document.getElementsByTagName('body')[0].appendChild(popup);

            },
            infoWindow_2: function() {

                const 
                    popup        = document.createElement('div'),
                    btn          = document.createElement('button'),
                    row          = document.createElement('div');
                    

                    popup.id = 'allInfo-2';
                    popup.classList.add('allInfo')
                    btn.id   = 'allInfo-close';
                    btn.innerText = 'Закрыть';

                    popup.appendChild(btn);
                                       

                    /*------- fields -------------*/
                        const rows = [];

                        rows[0]  = row.cloneNode();
                        rows[1]  = row.cloneNode();
                        rows[2]  = row.cloneNode();
                        rows[3]  = row.cloneNode();
                        rows[4]  = row.cloneNode();
                        rows[5]  = row.cloneNode();
                        rows[6]  = row.cloneNode();
                        rows[7]  = row.cloneNode();
                        rows[8]  = row.cloneNode();
                        rows[9]  = row.cloneNode();

                        rows[0].innerHTML = 
                        `   
                            <div class="name">Тип записи</div>
                            <div class="value">121</div>
                        `;
                        
                        rows[1].innerHTML = 
                        `   
                            <div class="name">Имя</div>
                            <div class="value">121</div>
                        `;
                        
                        rows[2].innerHTML = 
                        `   
                           <div class="name">Фамилия</div>
                           <div class="value"></div> 
                        `;   

                        rows[3].innerHTML = 
                        `   
                            <div class="name">Отчество</div>
                            <div class="value"></div> 
                        `;
                        

                        rows[4].innerHTML = 
                            `   
                                <div class="name">Возраст</div>
                                <div class="value"></div>
                            `;

                        rows[5].innerHTML = 
                            `   
                                <div class="name">Наличие Детей</div>
                                <div class="value"></div>
                            `;
                        rows[6].innerHTML = 
                            `   
                                <div class="name">Водитель</div>
                                <div class="value"></div>
                            `;
                        rows[7].innerHTML = 
                            `   
                                <div class="name">Опыт</div>
                                <div class="value"></div>
                            `;
                        rows[8].innerHTML = 
                            `   
                                <div class="name">Дата принятия</div>
                                <div class="value"></div>
                            `;
                        rows[9].innerHTML = 
                            `   
                                <div class="row-ind">
                                  <div class="name">Организация</div>
                                  <div class="value"></div>
                                </div>
                            `;

                        rows.forEach(el => {
                            el.classList.add('row-tr');
                            popup.appendChild(el);
                        });
                    /*----end -> fields ----------*/
                        
                document.getElementsByTagName('body')[0].appendChild(popup);

            },
            mainTable: function() {

                const 
                    container = document.createElement('div'),
                    table     = document.createElement('div'),
                    row       = document.createElement('div'),
                    cell      = document.createElement('div');


                    container.classList.add('container'); 
                    table.classList.add('main__table'); 
                    table.classList.add('table'); 
                    row.classList.add('table__row'); 
                    cell.classList.add('table__cell');

                const arr = [
                    'Имя'        ,
                    'Фамилия'    ,
                    'Возраст'    ,
                    'Организация',
                    'Должность'
                ];


                    for (let i = 0; i < 6; i++) {

                        let el = cell.cloneNode();
                        
                        if (i <= 4)  {
                            el.innerHTML = arr[i]
                        } 

                        row.appendChild(el)
                    } 

                    table.appendChild(row);
                    container.appendChild(table);

                    document.getElementsByTagName('body')[0].appendChild(container);  
                
            },
            render: function(e) {
                view.start();
                model.mainTable();
                model.createWindow();
                model.editWindow();
                model.infoWindow_1();
                model.infoWindow_2();
                conrtol.start();

            }

        }
    /*--------------------------------end Model--------------------------------*/

    model.Person.prototype.showFullInfoJSON = function() {
        return JSON.stringify(this);
    }
    model.Person.prototype.self = function() {
        return this._self;
    }

    model.EmployeeIndustr.prototype = Object.create(model.Person.prototype);
    model.EmployeeTrans.prototype   = Object.create(model.Person.prototype);


    /*--------------------------------Control--------------------------------*/
        document.querySelector('#start').addEventListener('click', model.render);
        document.querySelector('#demo').addEventListener('click', view.demo);
        document.onclick = e => {
            if (e.target.id === 'edit-window' || e.target.id === 'create-window') {
                e.target.classList.remove('active');
            }
        };

        const conrtol = {

            start: function(e) {
                const createForm     = document.querySelector('#create-form'),
                      editForm       = document.querySelector('#edit-form'),
                      mainTable      = document.querySelector('.main__table'),
                      createSelect_1 = document.querySelector('#create-select-1'),
                      createInputs   = document.querySelectorAll('.create-ipn'),
                      stuf           = [];

                let   countOfRow = 0,
                      currentRow = null,
                      isTrans    = false,
                      isValid    = true;

                window.createForm = createForm;
                window.editForm = editForm;
                window.mainTable = mainTable;
                window.createSelect_1 = createSelect_1;
                window.createInputs = createInputs;
                window.stuf = stuf;

                window.countOfRow = countOfRow;
                window.currentRow = currentRow;
                window.isTrans = isTrans;
                window.isValid = isValid;



                createForm.elements.forEach = Array.prototype.forEach;
                editForm.elements.forEach   = Array.prototype.forEach;
                createInputs.forEach        = Array.prototype.forEach;
                document.querySelector('#create-select-1').addEventListener('change', view.changeForm),
                // document.querySelector('.load-from-bd').addEventListener('change', view.changeForm),
                document.querySelector('#create').addEventListener('click', view.showCreateWindow),
                document.querySelector('#close-create-window').addEventListener('click', view.closeCreateWindow),
                document.querySelector('#close-edit-window').addEventListener('click', view.closeEditWindow),
                document.querySelector('#form-clean-btn').addEventListener('click', view.cleanForm),
                document.querySelector('#form-edit-clean-btn').addEventListener('click', view.cleanForm),
                document.querySelector('#form-create-btn').addEventListener('click', model.createEmployee),
                document.querySelector('#form-change-btn').addEventListener('click', model.changeInfo),
                document.querySelector('#allInfo-close').addEventListener('click', view.fullInfoClose),
                document.querySelector('#allInfo-close-2').addEventListener('click', view.fullInfoClose),
                document.querySelector('#expiriens').addEventListener('blur', model.validate),
                document.querySelector('#name').addEventListener('blur', model.validate),
                document.querySelector('#surname').addEventListener('blur', model.validate),
                document.querySelector('#patronym').addEventListener('blur', model.validate),
                document.querySelector('#age').addEventListener('blur', model.validate),
                document.querySelector('#expiriens-editForm').addEventListener('blur', model.validate),
                document.querySelector('#name-editForm').addEventListener('blur', model.validate),
                document.querySelector('#surname-editForm').addEventListener('blur', model.validate),
                document.querySelector('#patronym-editForm').addEventListener('blur', model.validate),
                document.querySelector('#age-editForm').addEventListener('blur', model.validate),
                document.querySelector('#form-change-btn').addEventListener('click', function(e){
                 e.preventDefault();
                });
            }
        }
    /*--------------------------------end Control--------------------------------*/














}