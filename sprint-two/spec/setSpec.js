describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });
  //our tests
  it('should handle numbers and strings', function() {
    set.add(1);
    set.add(23);
    set.add(1);
    set.add('this');
    set.add('that');
    set.add('this');
    set.add('again');
    expect(set.contains('this')).to.equal(true);
    expect(set.contains(23)).to.equal(true);
    

  });
  it('it should not add duplicates to the set', function() {
    set.add(1);
    set.add(23);
    set.add(1);
    set.add('this');
    set.add('that');
    set.add('this');
    set.add('again');
    expect(set.storage.length).to.equal(5);
  });

});
