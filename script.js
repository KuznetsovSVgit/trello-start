document.querySelectorAll('.column').forEach(Column.process);
document.querySelectorAll('.note').forEach(Note.process);

document
  .querySelector('[data-action-addColumn]')
  .addEventListener('click', function(event){
    let columnElement = document.createElement('div');
    columnElement.classList.add('column');
    columnElement.setAttribute('draggable', 'true');
    columnElement.setAttribute('data-column-id', Column.idCounter);
    columnElement.innerHTML = '<p class="column-header" contenteditable="true">В плане</p>    <div data-notes>		</div>		<p class="column-footer">	<span data-action-addNote class="action">+ Добавить карточку</span>		</p> ';
    Column.idCounter++;
    Column.process(columnElement);
    document.querySelector('.columns').append(columnElement);
  })
