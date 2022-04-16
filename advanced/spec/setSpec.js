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
    set.add(4);
    set.add(true);
    set.add(false);
    set.add(null);
    set.add([1, 2, 3]);
    set.add({a: 1, b: 5});
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
    expect(set.contains(4)).to.equal(true);
    expect(set.contains(true)).to.equal(true);
    expect(set.contains(false)).to.equal(true);
    expect(set.contains(null)).to.equal(true);
    expect(set.contains([1, 2, 3])).to.equal(true);
    expect(set.contains({a: 1, b: 5})).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    set.add(4);
    set.remove(4);
    set.add(true);
    set.remove(true);
    set.add(false);
    set.remove(false);
    set.add(null);
    set.remove(null);
    set.add([1, 2, 3]);
    set.remove([1, 2, 3]);
    set.add({a: 1, b: 5});
    set.remove({a: 1, b: 5});
    expect(set.contains('Mel Gibson')).to.equal(false);
    expect(set.contains(4)).to.equal(false);
    expect(set.contains(true)).to.equal(false);
    expect(set.contains(false)).to.equal(false);
    expect(set.contains(null)).to.equal(false);
    expect(set.contains([1, 2, 3])).to.equal(false);
    expect(set.contains({a: 1, b: 5})).to.equal(false);
  });

  it('should not contain values that were never in the set', function() {
    expect(set.contains('Mel Gibson')).to.equal(false);
    expect(set.contains(4)).to.equal(false);
  });

});
