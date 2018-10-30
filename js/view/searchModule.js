export default class SearchModule {

    getInputSearchElement(action) {
        let inputSearchDiv = document.createElement('input');
        inputSearchDiv.setAttribute('id', 'search-input');
        inputSearchDiv.className = 'search-element';
        inputSearchDiv.addEventListener('keyup', action);

        return inputSearchDiv;
    }

    getOptionSearchElement() {
        let searchOption = [['Name', 'name'], ['Region', 'regionName']];
        let optionSearchElement = document.createElement('select');
        optionSearchElement.setAttribute('id', 'option-search-element');
        optionSearchElement.className = 'search-element';
        searchOption.forEach(element => {
            optionSearchElement.appendChild(this.getOptionElement(element[1], element[0]));
        });

        return optionSearchElement;
    }

    getSearchLabel(name) {
        let labelSearchDiv = document.createElement('div');
        labelSearchDiv.setAttribute('id', 'label-search');
        labelSearchDiv.innerText = name;

        return labelSearchDiv;
    }

    getOptionElement(value, name) {
        let option = document.createElement('option');
        option.value = value;
        option.innerText = name;

        return option;
    }

    getValueCurrentOption() {
        let option = document.getElementById('option-search-element');

        return option.value;
    }

    getValueOfInput() {
        let input = document.getElementById('search-input');

        return input.value;
    }
}