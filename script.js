let noteIdCounter = 8;
let columnIdCounter = 3;



document.querySelectorAll('.column').forEach(columnProcess);
document.querySelectorAll('.note').forEach(noteProcess);

document
  .querySelector('[data-action-addColumn]')
  .addEventListener('click', function(event){
    let columnElement = document.createElement('div');
    columnElement.classList.add('column');
    columnElement.setAttribute('draggable', 'true');
    columnElement.setAttribute('data-column-id', columnIdCounter);
    columnElement.innerHTML = '<p class="column-header" contenteditable="true">В плане</p>    <div data-notes>		</div>		<p class="column-footer">	<span data-action-addNote class="action">+ Добавить карточку</span>		</p> ';
    columnIdCounter++;
    columnProcess(columnElement);
    document.querySelector('.columns').append(columnElement);
  })

function columnProcess (columnElement){
  const spanAction_addNote = columnElement.querySelector('[data-action-addNote]');
  spanAction_addNote.addEventListener('click', function (event) {
    let noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.setAttribute('draggable', 'true');
    noteElement.setAttribute('data-note-id', noteIdCounter);
    noteIdCounter++;
    
    columnElement.querySelector('[data-notes]').append(noteElement); 
    noteProcess(noteElement);   
  })
  const headerElement = columnElement.querySelector('.column-header');
  headerElement.addEventListener('dblclick', function(event){
    headerElement.setAttribute('contenteditable', 'true');
    headerElement.focus();
  })
  headerElement.addEventListener('blur', function (event) {
    headerElement.removeAttribute ('contenteditable');
  })
}

function noteProcess (noteElement) {
  noteElement.addEventListener('dblclick', function (event) {
    noteElement.setAttribute('contenteditable', 'true');
    noteElement.focus();
  })
  noteElement.addEventListener('blur', function (event) {
    noteElement.removeAttribute ('contenteditable');
  })

  noteElement.addEventListener('dragstart', dragstart_noteHandler)
  noteElement.addEventListener('dragend', dragend_noteHandler)
  noteElement.addEventListener('dragenter', dragenter_noteHandler)
  noteElement.addEventListener('dragover',  dragover_noteHandler)
  noteElement.addEventListener('dragleave', dragleave_noteHandler)
  noteElement.addEventListener('drop', drop_noteHandler)
}


function dragstart_noteHandler (event){
  console.log('dragstart');
}
function dragend_noteHandler (event){
  console.log('dragend');
}
function dragenter_noteHandler (event){
  console.log('dragenter');
}
function dragover_noteHandler (event){
  console.log('dragover');
}
function dragleave_noteHandler (event){
  console.log('dragleave');
}
function drop_noteHandler (event){
  console.log('drop');
}